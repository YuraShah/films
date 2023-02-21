import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import cn from 'classnames';

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={cn(styles.wrapper, 'wrapper')}>
            <div className={styles.footer_container}>
               <div>
                  <h2 className={styles.title}>CATEGORIES</h2>
                  <ul className={styles.cat_list}>
                     <li className={styles.cat_list_item}><Link to={'/genre/action'}>Action</Link></li>
                     <li className={styles.cat_list_item}><Link to={'/genre/comedy'}>Comedy</Link></li>
                     <li className={styles.cat_list_item}><Link to={'/genre/othergenres'}>Documentary</Link></li>
                     <li className={styles.cat_list_item}><Link to={'/genre/drama'}>Drama</Link></li>
                     <li className={styles.cat_list_item}><Link to={'/genre/othergenres'}>Fantasy</Link></li>
                     <li className={styles.cat_list_item}><Link to={'/genre/othergenres'}>Sci-Fi</Link></li>
                     <li className={styles.cat_list_item}><Link to={'/genre/othergenres'}>Slider</Link></li>
                     <li className={styles.cat_list_item}><Link to={'/genre/othergenres'}>Thriller</Link></li>
                     <li className={styles.cat_list_item}><Link to={'/genre/othergenres'}>TV Shows</Link></li>
                     <li ><Link to={'/'}>Uncategorized</Link></li>
                  </ul>
               </div>
               <div>
                  <h2 className={styles.title}>INFORMATION</h2>
                  <ul className={styles.cat_list}>
                     <li className={styles.cat_list_item}><Link to={'/'}>about us</Link></li>
                     <li className={styles.cat_list_item}><Link to={'/'}>contacts</Link></li>
                     <li className={styles.cat_list_item}><Link to={'/'}>terms of Service</Link></li>
                  </ul>
               </div>
               <div>
                  <h2 className={styles.title}>TAGS</h2>
                  <div className={styles.tags_cont}>
                     <div>
                        <button className={styles.tags_btn}>
                           <Link className={styles.tags_link} to={'/genre/action'}>action</Link>
                        </button>
                     </div>
                     <div>
                        <button className={styles.tags_btn}>
                           <Link className={styles.tags_link} to={'/genre/comedy'}>comedy</Link>
                        </button>
                     </div>
                     <div>
                        <button className={styles.tags_btn}>
                           <Link className={styles.tags_link} to={'/genre/othergenres'}>documentary</Link>
                        </button>
                     </div>
                     <div>
                        <button className={styles.tags_btn}>
                           <Link className={styles.tags_link} to={'/genre/othergenres'}>fantasy</Link>
                        </button>
                     </div>
                     <div>
                        <button className={styles.tags_btn}>
                           <Link className={styles.tags_link} to={'/genre/othergenres'}>history</Link>
                        </button>
                     </div>
                     <div>
                        <button className={styles.tags_btn}>
                           <Link className={styles.tags_link} to={'/genre/othergenres'}>horror</Link>
                        </button>
                     </div>
                     <div>
                        <button className={styles.tags_btn}>
                           <Link className={styles.tags_link} to={'/genre/othergenres'}>movie</Link>
                        </button>
                     </div>
                     <div>
                        <button className={styles.tags_btn}>
                           <Link className={styles.tags_link} to={'/genre/othergenres'}>show new</Link>
                        </button>
                     </div>
                     <div>
                        <button className={styles.tags_btn}>
                           <Link className={styles.tags_link} to={'/genre/othergenres'}>thriller</Link>
                        </button>
                     </div>
                     <div>
                        <button className={styles.tags_btn}>
                           <Link className={styles.tags_link} to={'/genre/othergenres'}>TV</Link>
                        </button>
                     </div>
                  </div>
               </div>
               <div>
                  <h2 className={styles.title}>SUBSCRIBE</h2>
                  <p className={cn(styles.text, styles.title)}>Get Alerted About All the New Movies!</p>
                  <div className={styles.cont_for_email}>
                     <div >
                        <input type="text" placeholder='Enter your email' className={styles.sub_inp} />
                     </div>
                     <div>
                        <button className={styles.sub_btn}>SUBSCRIBE</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.dash_cont}>
               <div className={styles.dash}></div>
            </div>
            <div className={cn(styles.end, styles.center)}>
               <p className={styles.text}>© 2023 MovieLine, Inc. All Rights Reserved.</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer
