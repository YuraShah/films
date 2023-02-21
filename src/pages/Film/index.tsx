import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Film = ({ film }: any) => {

   const stylesBtn = {
      color: 'white',
      padding: '5px',
      border: 'none',
      backgroundColor: `${film.genre == 'fantasy' || film.genre == 'documentary' ? 'orange' : film.genre == 'horror' || film.genre == 'thriller' ? 'green' : film.genre == 'action' || film.genre == 'history' ? 'red' : film.genre == 'TV' || film.genre == 'comedy' ? 'skyblue' : film.genre == 'science fiction' ? 'purple' : 'black'}`
   }


   return (
      <>
         <div
            style={{ backgroundImage: `url(${film.photos ? film.photos[1] : film.photo})`, backgroundSize: 'cover' }}
            className={styles.relative}
         >
            <div className={styles.container}>
               <div>
                  <button
                     className={styles.button}
                     style={stylesBtn}
                  >
                     <Link
                        className={styles.btn_link}
                        to={film.genre == 'action' ? "/genre/action" : film.genre == 'drama' ? "/genre/drama" : film.genre == 'comedy' ? "/genre/comedy" : "/genre/othergenres"}
                     >
                        {film.genre}
                     </Link>
                  </button>
               </div>
               <div className={styles.transformed_title}>
                  <h3>
                     <Link
                        to={'/' + film.getId}
                     >
                        {film.name} {'('}{film.year}{')'}
                     </Link>
                  </h3>
                  <p>
                     <Link
                        to={'/' + film.getId}
                     >
                        {film.year}
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </>
   )
}

export default Film
