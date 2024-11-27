
import Image from "next/image"
import { movieProps } from "@/types";
import MovieCardDetails from "./MovieCardDetails";
import { useMemo } from "react";
import nextflixLogo from '../public/nextflixLogo.jpg'

type trendingMovieProps = {
  movie: movieProps
  image: string
  title: string
  index:number
  showMovies:number
}

export default function TrendingMovie({ movie, image, title, index, showMovies }:  trendingMovieProps ) {
  // const isFavorite = true;
  
  const genreIds = useMemo(() => movie.genre_ids, [movie.genre_ids]);
  const imageProps = useMemo(
    () =>
      (title === "Trending Now" || movie.air_date) && index+1 <= showMovies
        ? { priority: true as const }
        : { loading: "lazy" as const },
    [title, index, showMovies, movie.air_date]
  );

  const imageStyles = useMemo(() => {
    if (movie.poster_path === image) {
      return "w-auto";
    }
    return "xs:w-[calc(100vw-3.5rem)] sm:w-[calc(55vw-4.5rem)] md:w-[calc(34vw-3.2rem)] xl:w-[calc(25vw-2.5rem)]";
  }, [movie.poster_path, image]);

  const isPoster = useMemo(() => movie.poster_path === image, [movie.poster_path, image]);

  const url = movie.poster_path || movie.backdrop_path || movie.still_path 
  ? `https://image.tmdb.org/t/p/${isPoster ? "original" : "w780"}${isPoster ? movie.poster_path : movie.backdrop_path ? movie.backdrop_path : movie.still_path}`
  : nextflixLogo.src
  return (
    <div
      className={`cursor-pointer relative text-[#f2f2f2] overflow-hidden rounded-lg group contain ${imageStyles}`}
      aria-label={`Movie: ${movie.title || movie.original_name || movie.name}`}
    >
      <div
        className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradientDetails absolute bottom-0 h-[60%]"
        style={{ willChange: "opacity" }}
      ></div>
      <Image
        src={url}
        alt={movie.title || movie.name || "Movie Image"}
        height={isPoster ? 380 : 282}
        width={isPoster ? 250 : 500}
        className="block object-cover rounded-lg"
        {...imageProps}
      />
      {
        movie &&
        <MovieCardDetails genreIds={genreIds} movie={movie} isPoster={isPoster} />
      }
    </div>
  )
}
