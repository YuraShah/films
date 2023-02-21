import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { multipleUploadFiles } from "../../firebase/storage";
import { EnumFirestore, Film } from "../../types/type";
import styles from './style.module.css';

const AddFilm = () => {
   const { register, handleSubmit, reset } = useForm<Film>();
   const dispatch = useAppDispatch();
   const { user } = useAppSelector((st): any => st.user);

   const save = (obj: any): void => {
      dispatch(multipleUploadFiles({ collectionName: EnumFirestore.FILM, obj: { ...obj, genre: obj.genre.toLowerCase(), userId: user.userId, uploadDate: Date.now(), isChecked: false } }))
         .unwrap().then((r) => {
            reset()
            console.log(r)
         }).catch((err) => {
            console.log(err)
         })

      // dispatch(uploadFiles({collectionName:EnumFirestore.FILM, obj:{...obj, userId: user.userId, uploadDate: Date.now(), isChecked: false}}))
      // .unwrap().then((r) => {
      //    console.log(r)
      // }).catch((err) => {
      //    console.log(err)
      // })
      // dispatch(addNewData({collectionName:EnumFirestore.FILM, obj:{...obj, userId: user.userId}}))
      // .unwrap().then((r) => {
      //    console.log(r)
      // }).catch((err) => {
      //    console.log(err)
      // })
   }


   return <div className={styles.addfilm_container}>
      <form onSubmit={handleSubmit(save)} className={styles.form}>
         <div className={styles.grid_self}>
            <label htmlFor="">Name</label>
         </div>
         <div className={styles.grid_self}>
            <label htmlFor="">Year</label>
         </div>
         <div className={styles.grid_self}>
            <input
               type="text"
               {...register('name', { required: true })}
            />
         </div>
         <div className={styles.grid_self}>
            <input
               type="text"
               placeholder="Number and min 4 numbers"
               {...register('year', { required: true, pattern: /^\d+$/, minLength: 4 })}
            />
         </div>
         <div className={styles.grid_self}>
            <label htmlFor="">Genre</label>
         </div>
         <div className={styles.grid_self}>
            <label htmlFor="">Description</label>
         </div>
         <div className={styles.grid_self}>
            <input
               type="text"
               {...register('genre', { required: true })}
            />
         </div>
         <div className={styles.grid_self}>
            <input
               type="text"
               {...register('description', { required: true })}
            />
         </div>
         <div className={styles.grid_self}>
            <label htmlFor="">Actors</label>
         </div>
         <div className={styles.grid_self}>
            <label htmlFor="">Producer</label>
         </div>
         <div className={styles.grid_self}>
            <input
               type="text"
               {...register('actors', { required: true })}
            />
         </div>
         <div className={styles.grid_self}>
            <input
               type="text"
               {...register('producer', { required: true })}
            />
         </div>
         <div className={styles.grid_self}>
            <label htmlFor="">Country</label>
         </div>
         <div className={styles.grid_self}>
            <label htmlFor="">Photos</label>
         </div>
         <div className={styles.grid_self}>
            <input
               type="text"
               {...register('country', { required: true })}
            />
         </div>
         <div className={styles.grid_self}>
            <input
               type="file"
               multiple
               {...register('photos', { required: true })}
            />
         </div>
         <div className={styles.btn_box}>
            <button className={styles.btn}>Add</button>
         </div>
      </form>
   </div>
}

export default AddFilm;