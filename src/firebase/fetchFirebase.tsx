import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limitToLast, orderBy, query, updateDoc, where } from "firebase/firestore"
import { TypeFirestore } from "../types/type";
import { db } from "./firebase-config"

export const addData = async ({collectionName, obj}: TypeFirestore) => {
    const coll = collection(db, collectionName);
    await addDoc(coll, obj)
    return 'Data added'
}

export const getData = async({collectionName}: TypeFirestore) => {
    const coll = collection(db, collectionName);
    const info = await getDocs(coll);
    return info.docs.map((el) => (
        ({...el.data(), getId: el.id})
    ))
}

export const getDataById = async({collectionName, id}: TypeFirestore) => {
    const coll = collection(db, collectionName);
    const q = query(coll, where('userId', '==', id));
    const info = await getDocs(q);
    return info.docs.map((el) => 
        ({...el.data(), docId: el.id})
    )
}

export const deleteFilm = async({collectionName, id}: any) => {
    const info = await deleteDoc(doc(db, collectionName, id))
    return info
}

export const updateData = async({collectionName, id, obj}: any) => {
    const info = doc(db, collectionName, id);
    const update = await updateDoc(info, {...obj})
    return update
}

export const getFilm = async({collectionName, id}: any) => {
    const info = doc(db, collectionName, id);
    const x = await getDoc(info)
    return x.data()
}

export const getCommentsByFilmId = async({collectionName, id}: TypeFirestore) => {
    const coll = collection(db, collectionName);
    const q = query(coll, where('filmId', '==', id));
    const info = await getDocs(q);
    return info.docs.map((el) => 
        ({...el.data(), docId: el.id})
    )
}

export const getCommentsByUserAndFilmId = async({collectionName, id, userId}: TypeFirestore) => {
    const coll = collection(db, collectionName);
    const q = query(coll, where('filmId', '==', id), where('userId', '==', userId));
    const info = await getDocs(q);
    return info.docs.map((el) => 
        ({...el.data(), docId: el.id})
    )
}

export const getLastFilms = async({collectionName}: TypeFirestore) => {
    const coll = collection(db, collectionName);
    const q = query(coll, orderBy('uploadDate', 'asc'), limitToLast(6));
    const info = await getDocs(q);
    return info.docs.map((el) => 
        ({...el.data(), docId: el.id})
    )
}

export const getFilmsByGenreAction = async({collectionName, genre}: TypeFirestore) => {
    const coll = collection(db, collectionName);
    const q = query(coll, where('genre', '==', genre));
    const info = await getDocs(q);
    return info.docs.map((el) => 
        ({...el.data(), docId: el.id})
    )
}

export const getFilmsByOtherGenre = async({collectionName}: TypeFirestore) => {
    const coll = collection(db, collectionName);
    const q = query(coll, where('genre', 'not-in', ['action', 'comedy', 'drama']));
    const info = await getDocs(q);
    return info.docs.map((el) => 
        ({...el.data(), docId: el.id})
    )
}
