import React from 'react';
import styles from './styles.module.css';
import cn from 'classnames';

const Pagination = ({ currentPage, setCurrentPage, pageCount, prev, next }: { currentPage: number, setCurrentPage: Function, pageCount: number, prev: Function, next: Function }) => {
   const pageNumbers = [...Array(pageCount + 1).keys()].slice(1);

   return (
      <div className={styles.pag_cont}>
         <div>
            <ul className={styles.pag_num_box}>
               {
                  pageNumbers.map((numb) => {
                     return <li
                        key={numb}
                        className={cn(styles.numb)}>
                        <span
                           onClick={() => setCurrentPage(numb)}
                           className={cn(styles.page, numb == currentPage ? styles.page_active : styles.page_disab)}
                        >
                           {numb}
                        </span>
                     </li>
                  })
               }
            </ul>
         </div>
         <div className={styles.btn_cont}>
            <div>
               <button
                  className={cn(styles.btn)}
                  onClick={() => prev()}
                  style={{ opacity: currentPage == 1 ? 0 : 1, cursor: currentPage == 1 ? 'auto' : 'pointer' }}
               >
                  {'<'}
               </button>
            </div>
            <div className={styles.dash}></div>
            <div>
               <button
                  className={cn(styles.btn)}
                  onClick={() => next()}
                  style={{ opacity: currentPage == pageCount ? 0 : 1, cursor: currentPage == pageCount ? 'auto' : 'pointer' }}
               >
                  {'>'}
               </button>
            </div>
         </div>
      </div>
   )
}

export default Pagination
