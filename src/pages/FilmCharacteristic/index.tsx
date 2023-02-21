import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addNewData, getFilmByParams, getCommentById, getLastFilm } from '../../features/film/filmAPI';
import { Comment, Comments, EnumFirestore, LastFilms } from '../../types/type';
import { Rating } from 'react-simple-star-rating'
import styles from './style.module.css';
import AsideFilms from '../Aside/AsideFilms';
import { Link as NavigLink } from "react-scroll";


const FilmCharacteristic = () => {
   const { getId } = useParams();
   const { film, commentsByfilmId, lastAddedFilms } = useAppSelector((st): any => st.film);
   const dispatch = useAppDispatch();
   const { register, handleSubmit, reset } = useForm<Comments>()
   const { user } = useAppSelector((st): any => st.user);
   const [rating, setRating] = useState<number>(0)

   useEffect(() => {
      dispatch(getFilmByParams({ collectionName: EnumFirestore.FILM, id: getId }))
      dispatch(getCommentById({ collectionName: EnumFirestore.COMMENT, id: getId }))
   }, [getId])

   useEffect(() => {
      dispatch(getLastFilm({ collectionName: EnumFirestore.FILM }))
   }, [])

   const averageRating: number = commentsByfilmId.length != 0 ? (commentsByfilmId.reduce((sum: number, item: any) => sum + item.filmRating, 0)) / commentsByfilmId.length : 0;

   const handleRating = (rate: number): void => {
      setRating(rate);
   }

   const save = (com: Comments): void => {
      if (user.id) {
         dispatch(addNewData({ collectionName: EnumFirestore.COMMENT, obj: { ...com, filmId: getId, userId: user.userId, userFbId: user.id, filmRating: rating } }))
      } else {
         alert('You are not registred')
      }
      reset();
      setRating(0)
   }

   return (
      <div className={styles.container}>
         <div>
            <div className={styles.film_cont}>
               <div>
                  <button className={styles.btn}>
                     <Link
                        to={film.genre == 'action' ? "/genre/action" : film.genre == 'drama' ? "/genre/drama" : film.genre == 'comedy' ? "/genre/comedy" : "/genre/othergenres"}
                     >
                        {film.genre}
                     </Link>
                  </button>
               </div>
               <h3 className={styles.title}>{film.name}</h3>
               <div className={styles.icon_box}>
                  <div className={styles.comm_icon_box}>
                     <i className="fa-solid fa-message"></i> <span></span>
                     <NavigLink
                        to='comments'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                     >
                        {commentsByfilmId.length}
                     </NavigLink>
                  </div>
                  <div className={styles.total}>
                     <>
                        Rating: {averageRating}
                     </>
                  </div>
               </div>
               <div>
                  {film.photos ? <img src={film.photos[1]} alt="" width='100%' /> :
                     <img src={film.photo} alt="film-pic" width='100%' />
                  }
               </div>
               <p><span>Released in:</span> {film.year}</p>
               <p><span>Genre:</span> {film.genre}</p>
               <p><span>Producer:</span> {film.producer}</p>
               <p><span>Actors:</span> {film.actors}</p>
               <p><span>Country:</span> {film.country}</p>
               <p>{film.description}</p>
            </div>
            <div className={styles.comm_cont}>
               <h3 id='comments' className={styles.comm_title}>COMMENTS</h3>
               {commentsByfilmId && <>
                  {commentsByfilmId.map((elem: Comment) => (
                     <div key={elem.docId}>
                        <p className={styles.name_text}>WRITTEN BY {elem.name}</p>
                        <p className={styles.com_text}>{elem.comment}</p>
                        <hr className={styles.dash} />
                     </div>
                  ))}
               </>}
            </div>
            <div className={styles.comm_cont}>
               <p className={styles.comm_fields_text}>Your email address will not be published. Required fields are marked <span>*</span></p>
               <form onSubmit={handleSubmit(save)}>
                  <div>
                     <textarea
                        placeholder='Comments*'
                        className={styles.comm_textarea}
                        {...register('comment')}
                     >

                     </textarea>
                  </div>
                  <div className={styles.inp__box}>
                     <input
                        type="text"
                        placeholder='Your name*'
                        className={styles.comm_inp}
                        {...register('name')}
                     />
                  </div>
                  <div>
                     <Rating
                        onClick={handleRating}
                        initialValue={rating}
                     />
                  </div>
                  <div className={styles.btn__box}>
                     <button className={styles.comm_btn}>SUBMIT COMMENT</button>
                  </div>
               </form>
            </div>
         </div>
         <aside>
            <div>
               <h2 className={styles.title_aside}>Last Added Films</h2>
               <div className={styles.grid_container}>
                  {lastAddedFilms && lastAddedFilms.slice(3).map((elem: LastFilms, i: number) =>
                     (<AsideFilms key={elem.docId} film={elem} index={i} />)
                  )}
               </div>
            </div>
         </aside>
      </div>
   )
}

export default FilmCharacteristic
