import React, { useCallback } from "react";
import { FaPlus, FaPlay, FaChevronDown } from "react-icons/fa";
import Genres from "./Genres";
import { movieProps } from "@/types";
import { usebackgroundIndex } from "@/store";
import Link from "next/link";

const MovieCardDetails = React.memo(function MovieCardDetails({
    genreIds,
    movie,
    isPoster,
}: {
    genreIds: number[];
    movie: movieProps;
    isPoster: boolean;
}) {
    const setOpenModal = usebackgroundIndex((state) => state.setOpenModal);

    const handleOpenModal = useCallback(() => {
        setOpenModal(true, movie);
    }, [setOpenModal, movie]);

    const mediaType = movie.media_type ? movie.media_type : movie.release_date ? 'movie' : 'tv';
    return (
        <div
            className=
            {`transition duration-300 opacity-0 absolute bottom-0 left-4 group-hover:translate-y-[-30px] contain group-hover:opacity-100 sm:group-hover:translate-y-[-10px]`}
        >
            {
                movie.still_path &&
                <h2 className="font-bold">Episode {movie.episode_number}</h2>
            }
            <div className="flex gap-3 md:gap-1">
                <Link
                href={`/mediaInfo/${movie.id}-${mediaType}`}
                    className="border-white border grid place-content-center w-10 h-10 sm:w-7 sm:h-7 sm:text-sm 
          rounded-full bg-white text-black hover:opacity-70 transition-opacity duration-300"
                    role="button"
                    aria-label="Play movie"
                >
                    <FaPlay />
                </Link>
                <div
                    className="border-white border grid place-content-center w-10 h-10 sm:w-7 sm:h-7 sm:text-sm 
          rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                    role="button"
                    aria-label="Add to favorites"
                >
                    <FaPlus />
                </div>
                <div
                    className="border-white border grid place-content-center w-10 h-10 sm:w-7 sm:h-7 sm:text-sm 
          rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                    role="button"
                    aria-label="Open details"
                    onClick={(e) => {
                        e.stopPropagation(); // Evita la propagación del clic
                        handleOpenModal();
                    }}
                >
                    <FaChevronDown />
                </div>
            </div>
            <h2 className="font-bold mt-2 text-[1rem] sm:text-[12px] overflow-hidden">
                {movie.title || movie.original_name || movie.name}
            </h2>
            <div>
                {
                    genreIds &&
                    <Genres genreIds={genreIds} isPoster={isPoster} />
                }
            </div>
        </div>
    );
});

export default MovieCardDetails;
