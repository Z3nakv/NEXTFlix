
import { genresProps, movieProps } from "@/types";
import { create } from "zustand";

type backgroundIndexProps = {
    movies: movieProps[]
    favoriteMovies: movieProps[]
    openModal: [boolean, movieProps]
    openTrailerModal: boolean
    backgroundIndex: string
    genresMoviesSeries: genresProps[]
    setOpenModal: (value:boolean, movie:movieProps) => void
    setOpenTrailerModal: (value:boolean) => void
    setMovies: (m: movieProps[] | genresProps[], key: string) => void
    setBackgroundIndex: (index: string | null) => void
    getData: (key:'movies') => movieProps[]
    getGenreData: () => genresProps[]
    setFavoriteMovies: (movies:movieProps) => void
    setDeleteFavorite: (movieId:number) => void
}

export const usebackgroundIndex = create<backgroundIndexProps>((set, get) => ({
    movies: [],
    favoriteMovies: [],
    openModal: [false, {} as movieProps],
    openTrailerModal: false,
    backgroundIndex: '0',
    genresMoviesSeries:[],
    setMovies: (movies, key) => {
        set((state) => ({ ...state, [key]: movies }));
    },
    setFavoriteMovies: (movie) => {
        set((state) => ({
            favoriteMovies: [...state.favoriteMovies, movie],
        }));
    },
    setDeleteFavorite: (id) => {
        set((state) => ({
            favoriteMovies: state.favoriteMovies.filter(fav => fav.id !== id),
        }))
    },
    setBackgroundIndex: (index) => {
        set({ backgroundIndex: index ? index : '0'})
    },
    setOpenModal: (value: boolean, movie: movieProps) => {
        set({
            openModal: [value, movie]
        });
    },
    setOpenTrailerModal: (value:boolean) => {
        set({openTrailerModal:value})
    },
    getData: (key) => get()[key],
    getGenreData: () => get()['genresMoviesSeries']
}))