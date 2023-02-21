import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css'

const SocIcons = () => {
  return (
    <>
      <ul className={styles.soc_list}>
        <li className={styles.soc_list_item}>
          <Link to={''}><i className="fa-brands fa-facebook-f"></i></Link>
        </li>
        <li className={styles.soc_list_item}>
          <Link to={''}><i className="fa-brands fa-twitter"></i></Link>
        </li>
        <li className={styles.soc_list_item}>
          <Link to={''}><i className="fa-brands fa-google-plus-g"></i></Link>
        </li>
        <li className={styles.soc_list_item}>
          <Link to={''}><i className="fa-brands fa-youtube"></i></Link>
        </li>
      </ul>
    </>
  )
}

export default SocIcons
