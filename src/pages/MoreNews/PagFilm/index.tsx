import React from 'react';
import styles from './styles.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const PagFilm = ({ film, index }: { film: any, index: number }) => {
  return (
    <>
      <div className={styles.grid_cont}>
        {film.photos ? <img src={film.photos[1]} alt="" width='100%' /> :
          <img src={film.photo} alt="pic" width='100%' />
        }
      </div>
      <div
        className={cn(styles.titl_cont, index % 2 != 0 ? styles.box_even : styles.box_odd)}
      >
        <div
          className={cn(styles.flex_box, index % 2 != 0 ? styles.box_even : styles.box_odd)}
        >
          <div
            className={cn(styles.text_box, index % 2 != 0 ? styles.box_even : styles.box_odd)}
          >
            <h4 className={styles.title}>
              <Link
                to={'/' + film.getId}
              >
                {film.name} {'('}{film.year}{')'}
              </Link>
            </h4>
            <p className={styles.text}>{film.description.substring(0, 100) + '...'}</p>
            <p className={styles.text_blue}>
              <Link
                to={'/' + film.getId}
              >
                {film.year}
              </Link>
            </p>
          </div>
          <div className={styles.btn_container}>
            <div className={styles.btn_box}>
              <Link
                to={'/' + film.getId}
              >
                <button>{'>'}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PagFilm
