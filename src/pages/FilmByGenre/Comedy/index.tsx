import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import GenreFilmes from '../../../components/GenreFilms';
import { getFilmByGenreAction } from '../../../features/film/filmAPI';
import { EnumFirestore, LastFilms } from '../../../types/type';

const Comedy = () => {
   const dispatch = useAppDispatch();
   const {filmsAction} = useAppSelector((st: any) => st.film);
   useEffect(() => {
      dispatch(getFilmByGenreAction({collectionName: EnumFirestore.FILM, genre: "comedy"}))
   }, [])

   return (
     <>
      {filmsAction && <>
         {filmsAction.map((elem: LastFilms) => 
            (<GenreFilmes film = {elem} key={elem.docId}/>)
         )}
      </>}
     </>
   )
}

export default Comedy