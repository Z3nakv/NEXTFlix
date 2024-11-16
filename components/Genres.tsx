import { fetchGenres } from "@/utils/fetchGenres";
import useSWR from "swr";

const fetcher = (url: string)  => fetch(url).then(r => r.json());

export default function Genres({genreIds} : {genreIds:number[]}) {

    const { data:genresMovies, error:errorMovie, isLoading: isLoadingMovies } = useSWR(`https://api.themoviedb.org/3/genre/movie/list?api_key=2a8e8430bbef22eac05ac10b009857ef&language=en`, fetcher)
    const { data:genresSeries, error:errorSerie, isLoading: isLoadingSeries } = useSWR(`https://api.themoviedb.org/3/genre/tv/list?api_key=2a8e8430bbef22eac05ac10b009857ef&language=en`, fetcher)
    
    const genres = isLoadingMovies || isLoadingSeries ? [] : [...genresMovies?.genres,...genresSeries?.genres];
    const { genresString } = fetchGenres({genreIds, genres});

    return (
        <div className='flex items-center max-w-min gap-5 text-[12px]'>
            {
                genresString && genresString.slice(0, 3).map((item, index) => (
                    <span key={index}>{item}</span>
                ))
            }
        </div>
    )
}
