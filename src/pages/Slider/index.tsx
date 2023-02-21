import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import slide from '../../slides.json';
import cn from 'classnames';
import { Slide } from '../../types/type';

const Slider = () => {
   const [slides, setSlides] = useState<Slide[]>(slide);
   let [time, setTime] = useState<number>(0);
   const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null);

   const getIndex = (i: number): void => {
      if(i != time) {
         setTime(i)
      }
   }

   function resetTimeout() {
      if(timeoutRef.current) {
         clearTimeout(timeoutRef.current)
      }
   }

   useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setTime((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
          ),
        3000
      );
  
      return () => {
        resetTimeout();
      };
    }, [time]);


  return (
    <section className={styles.slider_cont}>
      <h2 className={styles.cont_title}>FEATURED NEWS</h2>
      <div className={styles.slider}>
         <div className={styles.slider_line} style={{transform: `translateX(${-time * 1200}px)`, display:'flex'}}>
            {slides.map((slid: Slide, i: number) => 
               (<div className={cn(styles.content)} key={slid.id}>
                  <img src={slid.picture} alt="film_pic" className={styles.slider__picture}/>
                  <div className={cn(styles.transformed_part,  i == time ? styles.content_animation : null)}>
                     <p className={styles.text}>{slid.genre}</p>
                     <h2 className={styles.title}>{slid.title}</h2>
                  </div>
               </div>)
            )}
         </div>
      </div>
      <div className={styles.dots_container}>
        {slides.map((_, i: number) => 
         (<div key={i} onClick={() => getIndex(i)} className={cn(styles.dots, i == time ? styles.dots_active : null)}></div>)
        )} 
      </div>
    </section>
  )
}

export default Slider
