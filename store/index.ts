
import { genresProps, movieProps } from "@/types";
import { create } from "zustand";

type backgroundIndexProps = {
    movies: movieProps[]
    openModal: [boolean, movieProps]
    topRatedSeries: movieProps[]
    topRatedMovies: movieProps[]
    NEXTFlixOriginals: movieProps[]
    actionMovies: movieProps[]
    comedyMovies: movieProps[]
    horrorMovies: movieProps[]
    backgroundIndex: string | 0
    genresMoviesSeries: genresProps[]
    setOpenModal: (value:boolean, movie:movieProps) => void
    setMovies: (m: movieProps[] | genresProps[], key: string) => void
    setBackgroundIndex: (index: string | null) => void
    getData: (key:'movies' | 'topRatedMovies' | 'topRatedSeries' | 'NEXTFlixOriginals' | 'actionMovies' | 'comedyMovies' | 'horrorMovies' | 'romanceMovies' | 'documentaryMovies') => movieProps[]
    getGenreData: () => genresProps[]
}

export const usebackgroundIndex = create<backgroundIndexProps>((set, get) => ({
    movies: [],
    openModal: [false, {} as movieProps],
    topRatedSeries: [],
    topRatedMovies: [],
    NEXTFlixOriginals: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaryMovies: [],
    backgroundIndex: '',
    genresMoviesSeries:[],
    setMovies: (movies, key) => {
        set((state) => ({ ...state, [key]: movies }));
    },
    setBackgroundIndex: (index) => {
        set({ backgroundIndex: index ? index : 0})
    },
    setOpenModal: (value: boolean, movie: movieProps) => {
        set({
            openModal: [value, movie]
        });
    },
    getData: (key) => get()[key],
    getGenreData: () => get()['genresMoviesSeries']
}))