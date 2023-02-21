
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteFilmById, getFilmsById, getNewFilms } from "../../features/film/filmAPI";
import { deleteFilm } from "../../features/film/filmSlice";
import { EnumFirestore } from "../../types/type";
import styles from './style.module.css';
import cn from 'classnames';

const ShowFilms = () => {
   const dispatch = useAppDispatch();
   // const {films} = useAppSelector((st): any => st.film)
   const { filmsById } = useAppSelector((st): any => st.film)
   const { user } = useAppSelector((st): any => st.user)
   // console.log(user.userId);
   // useEffect(()=> {
   //    dispatch(getNewFilms({collectionName:EnumFirestore.FILM}))
   // },[])

   useEffect(() => {
      dispatch(getFilmsById({ collectionName: EnumFirestore.FILM, id: user.userId }))
   }, [])

   const del = (id: string): void => {
      dispatch(deleteFilm(id))
      dispatch(deleteFilmById({ collectionName: EnumFirestore.FILM, id: id }))
   }
   return <div className={styles.flex_container}>
      {filmsById && <>
         {filmsById.map((elem: any) =>
         (<div
            key={elem.docId}
            className={styles.flex_box}
         >
            <h3 className={styles.title}>{elem.name}</h3>
            <div className={styles.img_box}>
               {elem.photos ? <img src={elem.photos[1]} alt="" width='100%' height='100%' />
                  : <img src={elem.photo} alt="" width='100%' height='100%' />
               }
            </div>
            <div className={styles.btn_box}>
               <button
                  className={styles.btn}>
                  <Link
                     to={`${elem.userId}/` + elem.docId}
                  >
                     See more
                  </Link>
               </button>
            </div>
            <div className={styles.btn_box}>
               <button
                  className={cn(styles.btn, styles.btn_dang)}
                  onClick={() => del(elem.docId)}
               >
                  Delete
               </button>
            </div>
         </div>)
         )}
      </>}
   </div>
}

export default ShowFilms;
