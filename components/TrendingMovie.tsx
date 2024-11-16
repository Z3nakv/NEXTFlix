
import Image from "next/image"
import { movieProps } from "@/types";
import MovieCardDetails from "./MovieCardDetails";
import { useMemo } from "react";

export default function TrendingMovie({ movie, image, title }: { movie: movieProps, image: string, title:string }) {
  // const isFavorite = true;
  const genreIds = movie.genre_ids;

  const imageProps = 
  title === 'Top Rated' 
    ? { loading: "lazy" as const } 
    : { priority: true as const };

    const imageStyles = useMemo(() => 
      movie.poster_path === image 
        ? "w-auto" 
        : "xs:w-[calc(100vw-3.5rem)] sm:w-[calc(55vw-4.5rem)] md:w-[calc(34vw-3.2rem)] xl:w-[calc(25vw-2.5rem)]",
      [movie.poster_path, image]
    );
  
  return (
    <div
      className={`cursor-pointer relative text-white overflow-hidden rounded-lg bg-movieCardGragient group ${imageStyles}`}>
      {
        movie.poster_path === image ?
          <Image
            src={`https://image.tmdb.org/t/p/w200${image}`}
            alt={'movie'}
            height={380}
            width={250}
            className={`block object-cover rounded-lg`}
            {...imageProps}
          />
          :
          <Image
            src={`https://image.tmdb.org/t/p/w780${image}`}
            alt={'movie'}
            height={282}
            width={500}
            loading="lazy"
            className={`block object-cover rounded-lg`}
          />
      }
      {
        movie.backdrop_path === image &&
        <MovieCardDetails genreIds={genreIds} movie={movie} />
      }
    </div>
  )
}
