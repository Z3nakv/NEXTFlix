import { genresProps } from "@/types";
// import { fetchMovieGenreListData } from "./fecthData";

type fetchGenresProps = {
    genreIds:number[], 
    genres: genresProps[]
}

export function fetchGenres({ genreIds, genres } : fetchGenresProps){
    
    const genresString = genreIds?.map(genre => {
        const genreItem = genres.find(genreItem => genreItem.id === genre);
        return genreItem ? genreItem?.name : '';
    });
    return { genresString }
}
