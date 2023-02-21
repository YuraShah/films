import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Pagination from '../Pagination';
import PagFilm from '../PagFilm';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getNewFilms } from '../../../features/film/filmAPI';
import { EnumFirestore, LastAddedFilms } from '../../../types/type';

const Display = () => {
  const { films } = useAppSelector((st): any => st.film);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getNewFilms({ collectionName: EnumFirestore.FILM }))
  }, [])

  const cutFilms = films.slice(7);
  let [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5)

  const lastIndex: number = currentPage * limit;
  const firstIndex: number = lastIndex - limit;

  const pageCount: number = Math.ceil(cutFilms.length / limit);

  const next = (): void => {
    if (currentPage < pageCount) {
      currentPage = currentPage + 1;
    }
    setCurrentPage(currentPage)
  }
  const prev = (): void => {
    if (currentPage > 1) {
      currentPage = currentPage - 1;
    }
    setCurrentPage(currentPage)
  }
  return (
    <>
      <h2 className={styles.title}>MORE NEWS</h2>
      <div className={styles.cont_pagfilm}>
        {films && cutFilms.slice(firstIndex, lastIndex).map((elem: LastAddedFilms, i: number) => (
          <PagFilm
            key={elem.getId}
            film={elem}
            index={i}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
        prev={prev}
        next={next}
      />
    </>
  )
}

export default Display
