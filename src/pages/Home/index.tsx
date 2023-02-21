import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getNewFilms } from '../../features/film/filmAPI';
import { EnumFirestore, LastAddedFilms } from '../../types/type';
import Film from '../Film';
import News from '../News';
import Slider from '../Slider';
import styles from './style.module.css';

const Home = () => {
  const {films} = useAppSelector((st):any => st.film);
   const dispatch = useAppDispatch()
   
   useEffect(() => {
      dispatch(getNewFilms({collectionName: EnumFirestore.FILM}))
   }, [])

  return (
    <>
      <section className={styles.first_section}>
        <div className={styles.grid_cont}>
           {films && films.slice(0, 1).map((elem: LastAddedFilms) => 
              (<Film key={elem.getId} film = {elem}/>)
            )} 
        </div>
        <div className={styles.grid_container}>
            {films && films.slice(1, 5).map((elem: LastAddedFilms) => 
              (<Film key={elem.getId} film = {elem}/>)
            )} 
        </div>
      </section>
      <Slider/>
      <News/>
    </>
  )
}

export default Home
