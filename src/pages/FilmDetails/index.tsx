import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCommentByUserAndFilmId, getFilmByParams, updFilm } from "../../features/film/filmAPI";
import { Comment, EnumFirestore } from "../../types/type";
import styles from './style.module.css';

const FilmDetails = () => {
   const dispatch = useAppDispatch();
   const { film, commentsByUserId } = useAppSelector((st): any => st.film)
   const { did, uid } = useParams();
   const [updateFilm, setUpdateFilm] = useState<Object>({})
   useEffect(() => {
      dispatch(getFilmByParams({ collectionName: EnumFirestore.FILM, id: did }));
      dispatch(getCommentByUserAndFilmId({ collectionName: EnumFirestore.COMMENT, id: did, userId: uid }))
   }, [])

   // console.log(commentsByUserId)
   const save = (e: any): void => {
      e.preventDefault();
      dispatch(updFilm({ collectionName: EnumFirestore.FILM, id: did, obj: updateFilm }))
      alert('Changed');
   }

   return <div className={styles.grid_cont}>
      <div className={styles.search_film_cont}>
         {film && <>
            <div className={styles.search_content}>
               <div>
                  {film.photos ? <img src={film.photos[1]} alt="" width='100%' /> :
                     <img src={film.photo} alt="" width='100%' />
                  }
               </div>
               <div className={styles.text_cont}>
                  <h3 className={styles.title}>Name: {film.name}</h3>
                  <p>Genre: {film.genre}</p>
                  <p>Description: {film.description}</p>
                  <p>Country: {film.country}</p>
                  <p>Year: {film.year}</p>
                  <p>Actors: {film.actors}</p>
                  <p>Producer: {film.producer}</p>
               </div>
            </div> </>}
         <div className={styles.form_cont}>
            <h2 className={styles.comm_title}>Change movie properties</h2>
            <form onSubmit={save} className={styles.form}>
               <div className={styles.inps_box}>
                  <div>
                     <input
                        className={styles.inp}
                        type="text"
                        placeholder="name"
                        defaultValue={film.name || ""}
                        onChange={(e) => setUpdateFilm({ ...updateFilm, name: e.target.value })}
                     />
                  </div>
                  <div>
                     <input
                        className={styles.inp}
                        type="text"
                        placeholder='genre'
                        defaultValue={film.genre || ""}
                        onChange={(e) => setUpdateFilm({ ...updateFilm, genre: e.target.value })}
                     />
                  </div>
               </div>
               <div className={styles.btn_box}>
                  <button className={styles.btn}>Ok</button>
               </div>
            </form>
         </div>
         {commentsByUserId && <div className={styles.comm_cont}>
            <h2 className={styles.comm_title}>My comments for this film</h2>
            {commentsByUserId.map((el: Comment) => (
               <div key={el.docId}>
                  <p className={styles.comm_text}>{el.comment}</p>
               </div>
            ))}
         </div>}
      </div>
   </div>
}

export default FilmDetails;