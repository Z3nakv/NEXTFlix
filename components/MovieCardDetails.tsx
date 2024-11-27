'use client'
import React, { useCallback, useState, useEffect } from "react";
import { FaPlus, FaPlay, FaChevronDown, FaMinus } from "react-icons/fa";
import Genres from "./Genres";
import { movieProps } from "@/types";
import { usebackgroundIndex } from "@/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TransitionLink from "./layout/TransitionLayout";

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
    const setOpenTrailerModal = usebackgroundIndex(state => state.setOpenTrailerModal);

    const path = usePathname();
    const mediaInfo = path?.includes('mediaInfo');

    const handleOpenModal = useCallback(() => {
        setOpenModal(true, movie);
    }, [setOpenModal, movie]);

    // Estado para manejar los favoritos dinámicamente
    const [favorites, setFavorites] = useState<movieProps[]>([]);

    // Cargar favoritos desde localStorage al montar el componente
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);
    
    // Comprobar si una película está en favoritos
    const isFavorites = (id: string) => {
        return favorites.some((fav) => fav.id === id);
    };

    // Agregar película a favoritos
    const handleSaveFavorites = (movie: movieProps) => {
        // Obtener los favoritos actuales desde el estado
        const currentFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
        // Verificar si ya está en favoritos
        const isAlreadyFavorite = currentFavorites.some((fav: movieProps) => fav.id === movie.id);
    
        if (isAlreadyFavorite) {
            console.log("La película ya está en favoritos");
            return;
        }
    
        // Agregar la nueva película a la lista
        const updatedFavorites = [...currentFavorites, movie];
    
        // Actualizar localStorage
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    
        // Actualizar el estado
        setFavorites(updatedFavorites);
    
        console.log("Película añadida a favoritos");
    };
    

    // Eliminar película de favoritos
    const handleDeleteFavorites = (id: string) => {
        // Filtrar la lista actual para eliminar la película con el id proporcionado
        const updatedFavorites = favorites.filter((fav: movieProps) => fav.id !== id);
    
        // Actualizar localStorage
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    
        // Actualizar el estado
        setFavorites(updatedFavorites);
    
        console.log("Película eliminada de favoritos");
    };
    

    const mediaType = movie.media_type ? movie.media_type : movie.release_date ? 'movie' : 'tv';

    return (
        <div
            className="transition duration-300 opacity-0 absolute bottom-0 left-4 group-hover:translate-y-[-30px] contain group-hover:opacity-100 sm:group-hover:translate-y-[-10px]"
        >
            {
                movie.still_path &&
                <h2 className="font-bold">Episode {movie.episode_number}</h2>
            }
            <div className="flex gap-3 md:gap-1">
                {
                    !mediaInfo ?
                        <TransitionLink
                            href={`/mediaInfo/${movie.id}-${mediaType}`}
                        >
                            <div className="border-white border grid place-content-center w-10 h-10 sm:w-7 sm:h-7 sm:text-sm 
                            rounded-full bg-white text-black hover:opacity-70 transition-opacity duration-300"
                                role="button"
                                aria-label="Play movie"
                            >
                                <FaPlay />
                            </div>
                        </TransitionLink>
                        :
                        <button
                            className="border-white border grid place-content-center w-10 h-10 sm:w-7 sm:h-7 sm:text-sm 
                            rounded-full bg-white text-black hover:opacity-70 transition-opacity duration-300"
                            role="button"
                            aria-label="Play movie"
                            onClick={() => setOpenTrailerModal(true)}
                        >
                            <FaPlay />
                        </button>
                }
                <div
                    className="border-white border grid place-content-center w-10 h-10 sm:w-7 sm:h-7 sm:text-sm 
                    rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                    role="button"
                    aria-label={isFavorites(movie.id) ? "Remove from favorites" : "Add to favorites"}
                    onClick={() => {
                        isFavorites(movie.id)
                            ? handleDeleteFavorites(movie.id)
                            : handleSaveFavorites(movie);
                    }}
                >
                    {isFavorites(movie.id) ? <FaMinus /> : <FaPlus />}
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
