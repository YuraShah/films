import React from 'react';
import { Link } from 'react-router-dom';
import { Film, LastFilms } from '../../types/type';
import styles from './style.module.css';

const GenreFilmes = ({ film }: any) => {
   return (
      <div className={styles.grid_cont}>
         <div className={styles.search_film_cont}>
            <div className={styles.search_content}>
               <div>
               {film.photos ? <img src={film.photos[1]} alt="" width='100%'/> :
                  <img src={film.photo} alt="" width='100%' />
               }   
               </div>
               <div className={styles.text_cont}>
                  <h2 className={styles.title}><Link to={'/' + film.docId}>{film.name} {'('}{film.year}{')'}</Link></h2>
                  <p className={styles.text}><Link to={'/' + film.docId}>{film.year}</Link></p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default GenreFilmes
