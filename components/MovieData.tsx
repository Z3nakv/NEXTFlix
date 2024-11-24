'use client'
import { usebackgroundIndex } from '@/store';
import { movieProps } from '@/types';
import { FaPlay } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import Genres from './Genres';

type movieDataProps = {
    movies: movieProps[]
}

export default function MovieData({ movies }: movieDataProps) {

    const backgroundIndex  = usebackgroundIndex((state) => state.backgroundIndex);
    const backgroundImage = movies[+backgroundIndex]
    const genreIds = movies[+backgroundIndex]?.genre_ids;
    
    return (
        <>
            {
                backgroundImage && backgroundImage.overview ? (
                    <div className='text-white mb-10 transition duration-500 animate-dataFadeInUp'>
                        <h1 className="text-2xl font-bold">{backgroundImage?.title || backgroundImage?.original_name}</h1>
                        <p className={`mb-3 max-w-md text-shadow-md text-lg truncate-multiline-3`}>{backgroundImage?.overview}</p>
                        <Genres genreIds={genreIds} isPoster={false} />
                        <div className="flex space-x-3 mt-10">
                            <button className="bannerButton bg-[#e50914] text-white text-sm">
                                <FaPlay className='h-5 min-w-5 text-white md:h-8 md:min-w-8' />Play
                            </button>
                            <button className="bannerButton bg-[gray]/70 text-sm">
                                <IoMdInformationCircleOutline className="h-5 min-w-5 md:h-8 md:min-w-8" />More info
                            </button>
                        </div>
                    </div>
                )
                    : null
            }
        </>
    )
}
