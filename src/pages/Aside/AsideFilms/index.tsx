import React from 'react';
import styles from './style.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { LastFilms } from '../../../types/type';

const AsideFilms = ({ film, index }: { film: LastFilms, index: number }) => {
  return (
    <>
      <div>
        {film.photos ? <img src={film.photos[1]} alt="" width='100%' height='100%' /> :
          <img src={film.photo} alt="" width='100%' height='100%' />
        }
      </div>
      <div
        className={cn(styles.title_cont, index % 2 == 0 ? styles.even : styles.odd)}
      >
        <div
          className={cn(styles.absol, index % 2 == 0 ? styles.even : styles.odd)}
        >
          <h4 className={styles.title}>
            <Link
              to={'/' + film.docId}>
              {film.name} {'('}{film.year}{')'}
            </Link>
          </h4>
          <div className={cn(styles.box)}>
            <button>
              <Link
                to={'/' + film.docId}
              >
                {'>'}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AsideFilms
