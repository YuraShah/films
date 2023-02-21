import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { TypeFirestore } from "../types/type";
import { db, storage } from "./firebase-config";

export const uploadFiles = createAsyncThunk(
    'add/filmphoto',
    async({collectionName, obj}: TypeFirestore ) => {
    if(obj.photo.length) {
        const storageRef = ref(storage, `files/${obj.photo[0].name}`);
        const uploadTask = uploadBytesResumable(storageRef, obj.photo[0]);
        uploadTask.on('state_changed',
        (snapshot) => {

        },
        (error) => {
            alert(error)
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                console.log(downloadURL)
                delete obj.photo
                const coll = collection(db, collectionName);
                await addDoc(coll, {...obj, photo: downloadURL})
            })
        }
        );
    } else{
        delete obj.photo
        const coll = collection(db, collectionName);
        await addDoc(coll, obj)
    }
}
) 

export const multipleUploadFiles = createAsyncThunk(
    'add/multiplefilmphoto',
    async({collectionName, obj}: TypeFirestore) => {
        const coll = collection(db, collectionName);
        let x = await addDoc(coll, {...obj, photos: []});
        let arr: any = [];
        for (let e of obj.photos) {
            const storageRef = ref(storage, `files/${e.name}`);
            const uploadTask = uploadBytesResumable(storageRef, e);
            uploadTask.on('state_changed', 
            (snapshot) => {

            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                    arr.push(downloadURL)
                    await updateDoc(doc(coll, x.id), {photos: arr})
                })
            })
        }
    }
)

