import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Film from '../Film';
import FirstAside from '../Aside/FirstAside';
import SecondAside from '../Aside/SecondAside';
import Display from '../MoreNews/Display';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { EnumFirestore, LastAddedFilms } from '../../types/type';
import { getNewFilms } from "../../features/film/filmAPI";
import cn from 'classnames'

const News = () => {
   const {films} = useAppSelector((st):any => st.film);
   const dispatch = useAppDispatch()
   
   useEffect(() => {
      dispatch(getNewFilms({collectionName: EnumFirestore.FILM}))
   }, [])


  return (
    <section className={cn(styles.container)}>
      <div className={styles.wrap_pad}>
         <div>
            <h3 className={styles.title}>LATEST NEWS</h3>
            <div className={styles.pic_container}>
               {films && films.slice(5, 11).map((elem: LastAddedFilms) => 
                  (<Film key={elem.getId} film = {elem}/>)
               )}
            </div>
         </div>
         <div className={styles.disp_cont}>
           <Display/>
         </div>
      </div>
      <div className={cn(styles.aside_container, 'aside')}>
         <FirstAside/>
         <SecondAside/>
      </div>
    </section>
  )
}

export default News
