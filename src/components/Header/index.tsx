import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar';
import SocIcons from '../SocIcons';
import styles from './style.module.css'

const Header = () => {
 
  return (
    <header className={styles.header}>
      <div className={styles.flex_container}>
         <div>
            <Link to={'/'}><img src="http://localhost:3000/images/logo.webp" alt="logo" /></Link>
         </div>
         <div className={styles.soc_container}>
            <SocIcons/>
         </div>
      </div>
      <nav className={styles.navbar}>
        <NavBar/>
      </nav>
    </header>
  )
}

export default Header;
