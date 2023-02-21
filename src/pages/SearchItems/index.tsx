import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getNewFilms } from '../../features/film/filmAPI';
import { EnumFirestore } from '../../types/type';
import styles from './style.module.css';

const SearchItems = () => {
   const { searchValue }: any = useOutletContext();
   const dispatch = useAppDispatch();
   const { films } = useAppSelector((st): any => st.film);

   useEffect(() => {
      dispatch(getNewFilms({ collectionName: EnumFirestore.FILM }))
   }, [searchValue])

   const filFilms = searchValue != "" ? films.filter((a: any) => a.name.toLowerCase().includes(searchValue.toLowerCase())) : [];


   return (
      <div className={styles.grid_cont}>
         <div className={styles.search_film_cont}>
            {filFilms.length == 0 ? <p className={styles.text_no}>No matches found</p> :
               filFilms.map((elem: any) =>
               (<div className={styles.search_content} key={elem.getId}>
                  <div>
                     {elem.photos ? <img src={elem.photos[1]} alt="" width='100%' height='100%' /> :
                        <img src={elem.photo} alt="" width='100%' />
                     }
                  </div>
                  <div className={styles.text_cont}>
                     <h2 className={styles.title}>
                        <Link
                           to={'/' + elem.getId}
                        >
                           {elem.name} {'('}{elem.year}{')'}
                        </Link>
                     </h2>
                     <p className={styles.text}>
                        <Link
                           to={'/' + elem.getId}
                        >
                           {elem.year}
                        </Link>
                     </p>
                  </div>
               </div>)
               )}
         </div>
      </div>
   )
}

export default SearchItems