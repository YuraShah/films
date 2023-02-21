import { createSlice, Draft } from "@reduxjs/toolkit"
import { deleteFilmById, getCommentById, getCommentByUserAndFilmId, getFilmByGenreAction, getFilmByOtherGenre, getFilmByParams, getFilmsById, getLastFilm, getNewFilms } from "./filmAPI"

const initialState = {
    films: [],
    filmsById: [],
    film: {},
    commentsByfilmId: [],
    commentsByUserId: [],
    lastAddedFilms: [],
    filmsAction: [],
    filmsOtherGenre: [],
}

const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        addFilm: (state, action) => {
            state.films = action.payload 
        },
        deleteFilm: (state, action) => {
            state.filmsById = state.filmsById.filter((a: any) => a.docId != action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNewFilms.fulfilled, (state:Draft<any>, action)=> {
            state.films = action.payload
        })
        builder.addCase(getFilmsById.fulfilled, (state:Draft<any>, action) => {
            state.filmsById = action.payload
        })
        builder.addCase(getFilmByParams.fulfilled, (state: Draft<any>, action) => {
            state.film = action.payload
        })
        builder.addCase(getCommentById.fulfilled, (state: Draft<any>, action) => {
            state.commentsByfilmId = action.payload
        })
        builder.addCase(getCommentByUserAndFilmId.fulfilled, (state: Draft<any>, action) => {
            state.commentsByUserId = action.payload
        })
        builder.addCase(getLastFilm.fulfilled, (state: Draft<any>, action) => {
            state.lastAddedFilms = action.payload
        })
        builder.addCase(getFilmByGenreAction.fulfilled, (state: Draft<any>, action) => {
            state.filmsAction = action.payload
        })
        builder.addCase(getFilmByOtherGenre.fulfilled, (state: Draft<any>, action) => {
            state.filmsOtherGenre = action.payload
        })
    }
})

export default filmSlice.reducer
export const {addFilm, deleteFilm} = filmSlice.actions