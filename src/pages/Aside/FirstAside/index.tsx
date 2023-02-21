import React from 'react';
import styles from './style.module.css';
import cn from 'classnames';
import SocIcons from '../../../components/SocIcons';

const FirstAside = () => {
   return (
      <aside className={cn(styles.first_aside, 'aside')}>
         <h2 className={styles.title}>FOLLOW AND SUBSCRIBE</h2>
         <div className={styles.aside_top_wrap}>
            <div className={styles.first_aside_content}>
               <h3 className={styles.cont_title}>EXPLORE NEW MOVIES</h3>
               <p className={styles.text}>...and share the links to videos with your friends on Facebook & More!</p>
               <div className={styles.socicons_container}><SocIcons /></div>
            </div>
            <div className={cn(styles.first_aside_content, styles.first_aside_content_black)}>
               <h3 className={styles.cont_title}>ALERTS FOR NEW MOVIES!</h3>
               <p className={styles.text}>Sign up and get alerted to your email address as soon as we add a new film on our website!</p>
               <div className={styles.black_div}>
                  <input type="text" placeholder='Your e-mail' className={styles.inp} />
               </div>
               <div className={styles.black_btn}>
                  <button className={styles.btn}>SUBSCRIBE</button>
               </div>
            </div>
         </div>
      </aside>
   )
}

export default FirstAside
