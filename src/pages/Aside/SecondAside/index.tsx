import React, { useEffect } from 'react';
import styles from './style.module.css';
import AsideFilms from '../AsideFilms';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getLastFilm } from '../../../features/film/filmAPI';
import { EnumFirestore, LastFilms } from '../../../types/type';
import cn from 'classnames'

const SecondAside = () => {
  const { lastAddedFilms } = useAppSelector((st): any => st.film);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLastFilm({ collectionName: EnumFirestore.FILM }))
  }, [])
  return (
    <aside className={cn(styles.asidefilms, 'aside')}>
      <div className={styles.event_box}>
        <h2 className={styles.titles}>RECENT EVENTS</h2>
        <div className={styles.bord_top}>
          <div className={styles.grid_container}>
            {lastAddedFilms && lastAddedFilms.slice(0, 3).map((elem: LastFilms, i: number) => {
              return <AsideFilms key={elem.docId} film={elem} index={i} />
            })}
          </div>
        </div>
      </div>
      <div>
        <h2 className={styles.titles}>NEW ADDED TRAILERS</h2>
        <div className={styles.bord_top}>
          <div className={styles.grid_container}>
            {lastAddedFilms && lastAddedFilms.slice(3).map((elem: LastFilms, i: number) => {
              return <AsideFilms key={elem.docId} film={elem} index={i} />
            })}
          </div>
        </div>
      </div>
      <div className={styles.comm_container}>
        <h2 className={styles.titles}>RECENT COMMENTS</h2>
        <div style={{ borderTop: '3px solid rgb(158, 235, 71)' }}>
          <div className={styles.comm_cont}>
            <div className={styles.boxes}>
              <h4 className={styles.boxes_title}>MATTHEW ON THE MIRACLE OF MORGANS CREEK (1944)</h4>
            </div>
            <div className={styles.boxes}>
              <h4 className={styles.boxes_title}>LAWRENCE ON ITS A MAD, MAD, MAD, MAD WORLD (1963)</h4>
            </div>
            <div className={styles.boxes}>
              <h4 className={styles.boxes_title}>CAROL ON NATIONAL LAMPOONS ANIMAL HOUSE (1978)</h4>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SecondAside