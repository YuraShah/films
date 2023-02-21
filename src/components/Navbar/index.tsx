import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import cn from 'classnames';
import { useAppSelector } from '../../app/hooks';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';

const NavBar = () => {
  const { user } = useAppSelector((st): any => st.user);

  const logout = (): void => {
    signOut(auth)
    window.location.reload()
  }

  return (
    <>
      <ul className={cn(styles.menu, 'menu')}>
        <li className={cn(styles.menu_list)}>
          <NavLink
            to={'/'}
            end
            className={styles.menu_link}
            style={({ isActive }) => isActive ? { color: '#3ec0e1' } : {}}>
            HOME
          </NavLink>
        </li>
        <li className={cn(styles.menu_list)}>
          <NavLink
            to={'/genre/comedy'}
            className={styles.menu_link}
            style={({ isActive }) => isActive ? { color: '#3ec0e1' } : {}}>
            COMEDY
          </NavLink>
        </li>
        <li className={styles.menu_list}>
          <NavLink
            to={'/genre/drama'}
            className={styles.menu_link}
            style={({ isActive }) => isActive ? { color: '#3ec0e1' } : {}}>
            DRAMA
          </NavLink>
        </li>
        <li className={styles.menu_list}>
          <NavLink
            to={'/genre/action'}
            className={styles.menu_link}
            style={({ isActive }) => isActive ? { color: '#3ec0e1' } : {}}>
            ACTION
          </NavLink>
        </li>
        <li className={styles.menu_list}>
          <NavLink
            to={'/genre/othergenres'}
            className={styles.menu_link}
            style={({ isActive }) => isActive ? { color: '#3ec0e1' } : {}}>
            OTHER GENRES
          </NavLink>
        </li>
      </ul>
      {!user.id ? <>
        <ul className={cn(styles.menu, 'menu')}>
          <li className={styles.menu_list}>
            <NavLink
              to={'/signin'}
              className={styles.menu_link}
              style={({ isActive }) => isActive ? { color: '#3ec0e1' } : {}}>
              SIGNIN
            </NavLink>
          </li>
          <li className={cn(styles.menu_list)}>
            <NavLink
              to={'/signup'}
              className={styles.menu_link}
              style={({ isActive }) => isActive ? { color: '#3ec0e1' } : {}}>
              SIGNUP
            </NavLink>
          </li>
        </ul>
      </> : <ul className={styles.menu}>
        <li className={styles.menu_list}>
          Hello, <span className={styles.span}>{user.name}</span>
        </li>
        <li
          onClick={() => logout()}
          className={cn(styles.menu_list, styles.menu_list_logout)}>
          LOGOUT
        </li>
        <li className={styles.menu_list}>
          <Link
            to={'/profile'}
            className={styles.menu_link}>
            PROFILE
          </Link>
        </li>
      </ul>}
    </>
  )
}

export default NavBar

