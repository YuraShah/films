export interface User {
    id?: string,
    name: string,
    surname: string,
    age: number,
    gender: string,
    email: string,
    password: string,
    phone: string
}

export interface EmPas {
    email: string,
    password: string
}

export enum EnumFirestore {
    USER = 'user',
    FILM = 'film',
    COMMENT = 'comment'
}

export type Film = {
    id?: string,
    docId: string,
    name?: string,
    year?: number,
    genre?: string,
    description?: string,
    actors?: string,
    producer?: string,
    country?: string,
    photo?: string,
    photos?: any,
    uploadDate?: number,
    isChecked?: boolean
}


export type TypeFirestore = {
    collectionName: EnumFirestore,
    obj?: any,
    id?: string,
    userId?: string,
    genre?: string
}

export type SearchIt = {
    val: string
}

export type LastAddedFilms = {
    id?: string,
    docId: string,
    name?: string,
    year?: number,
    genre?: string,
    description?: string,
    actors?: string,
    producer?: string,
    country?: string,
    photo?: string,
    photos?: any,
    uploadDate?: number,
    isChecked?: boolean,
    getId?: string
}

export type LastFilms = {
    [key in keyof LastAddedFilms]?: string;
}

export type Comments = {
    comment?: string,
    name?: string,
    rate?: number
}

export type Comment = {
    comment?: string,
    userId?: string,
    filmRating?: number,
    name?: string,
    userFbId?: string,
    docId?: string
}

export type Slide = {
    id?: number,
    title?: string,
    picture?: string,
    genre?: string
}



