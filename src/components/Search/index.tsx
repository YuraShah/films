import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SearchIt } from '../../types/type';
import styles from './style.module.css';

const Search = ({ setSearchValue }: any) => {
  const { register, handleSubmit } = useForm<SearchIt>();
  const navigate = useNavigate();

  const save = (data: SearchIt): void => {
    setSearchValue(data.val)
    navigate('/searchitems')
  }
  return (
    <>
      <form onSubmit={handleSubmit(save)} className={styles.form}>
        <input
          type="text" placeholder="Search by film name..."
          className={styles.inp}
          {...register('val')}
        />
        <div className={styles.icon} >
          <button className={styles.btn}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>

    </>
  )
}

export default Search
