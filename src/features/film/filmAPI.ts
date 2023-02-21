import { TypeFirestore } from './../../types/type';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addData, deleteFilm, getCommentsByFilmId, getCommentsByUserAndFilmId, getData, getDataById, getFilm, getFilmsByGenreAction, getFilmsByOtherGenre, getLastFilms, updateData } from "../../firebase/fetchFirebase";

export const addNewData = createAsyncThunk(
    'add/film',
    async ({collectionName, obj}:TypeFirestore) => {
        const data = await addData({collectionName, obj})
        .then((r) => {
            return r
        }).catch((err) => {
            console.log(err)
        })
        return data
    }
)

export const getNewFilms = createAsyncThunk(
    'get/films',
    async({collectionName}: TypeFirestore) => {
        const film = await getData({collectionName})
        .then((r) => {
            return r  
        })
        return film
    }
)
export const getFilmsById = createAsyncThunk(
    'get/idfilms',
    async({collectionName, id}: TypeFirestore) => {
        const film = await getDataById({collectionName, id})
        .then((r) => {
            return r  
        })
        return film
    }
)

export const deleteFilmById = createAsyncThunk(
    'del/films',
    async({collectionName, id}: TypeFirestore) => {
        const film = await deleteFilm({collectionName, id})
        .then((r) => {
            return r  
        })
        return film
    }
)

export const getFilmByParams = createAsyncThunk(
    'get/film',
    async({collectionName, id}: TypeFirestore) => {
        const film = await getFilm({collectionName, id})
        .then((r) => {
            return r  
        })
        return film
    }
)

export const updFilm = createAsyncThunk(
    'upd/film',
    async({collectionName, id, obj}: TypeFirestore) => {
        const film = await updateData({collectionName, id, obj})
        .then((r) => {
            // console.log(r)
            return r  
        })
        return film
    }
)

export const getCommentById = createAsyncThunk(
    'get/commentbyid',
    async({collectionName, id}: TypeFirestore) => {
        const comment = await getCommentsByFilmId({collectionName, id})
        .then((r) => {
            return r  
        })
        return comment
    }
)
export const getCommentByUserAndFilmId = createAsyncThunk(
    'get/commentbyuserandfilmid',
    async({collectionName, id, userId}: TypeFirestore) => {
        const comment = await getCommentsByUserAndFilmId({collectionName, id, userId})
        .then((r) => {
            return r  
        })
        return comment
    }
)

export const getLastFilm = createAsyncThunk(
    'get/lastfilm',
    async({collectionName}: TypeFirestore) => {
       const film = await getLastFilms({collectionName})
       .then((r) => {
        return r
       })
       return film
    }
)
export const getFilmByGenreAction = createAsyncThunk(
    'get/filmbygenreaction',
    async({collectionName, genre}: TypeFirestore) => {
        const film = await getFilmsByGenreAction({collectionName, genre})
        .then((r) => {
            return r  
        })
        return film
    }
)
export const getFilmByOtherGenre = createAsyncThunk(
    'get/filmbyothergenre',
    async({collectionName}: TypeFirestore) => {
        const film = await getFilmsByOtherGenre({collectionName})
        .then((r) => {
            return r  
        })
        return film
    }
)


