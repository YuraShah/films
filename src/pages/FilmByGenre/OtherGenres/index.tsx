import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import GenreFilmes from '../../../components/GenreFilms';
import { getFilmByOtherGenre } from '../../../features/film/filmAPI';
import { EnumFirestore, LastFilms } from '../../../types/type';

const OtherGenres = () => {
   const dispatch = useAppDispatch();
   const {filmsOtherGenre} = useAppSelector((st: any) => st.film);
   useEffect(() => {
      dispatch(getFilmByOtherGenre({collectionName: EnumFirestore.FILM}))
   }, [])

   return (
     <>
      {filmsOtherGenre && <>
         {filmsOtherGenre.map((elem: LastFilms) => 
            (<GenreFilmes film = {elem} key={elem.docId}/>)
         )}
      </>}
     </>)
}

export default OtherGenres;
