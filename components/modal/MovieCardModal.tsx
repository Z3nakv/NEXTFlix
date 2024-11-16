'use client'
import Image from 'next/image'
import { movieProps } from '@/types';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { usebackgroundIndex } from '@/store';
import { Inter } from 'next/font/google';
import Genres from '../Genres';

const inter = Inter({
    subsets: ['latin'],
})

export default function MovieCardModal() {
    const { openModal, setOpenModal } = usebackgroundIndex();
    const movieInfo = openModal[1];
    const age_rate = movieInfo?.adult ? 'Only Adults' : 'For all public';

    const handleCloseModal = () => setOpenModal(false, {} as movieProps)
    
    
    return (
        openModal[0] && (
            <div 
            className={`h-screen w-screen bg-[#141414] bg-opacity-60 fixed inset-0 z-50`}
            onClick={handleCloseModal}
            aria-hidden="true"
            >
                <div 
                className={`bg-[#181818] rounded-lg absolute left-[48%] top-[50%] text-white w-[90vw] max-w-[750px] overflow-hidden transition duration-1000 z-[80] animate-fadeInUp`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                >
                    <div className='block relative'>
                        <Image
                            src={`https://image.tmdb.org/t/p/original${movieInfo?.backdrop_path}`}
                            alt='movie'
                            height={282}
                            width={500}
                            style={{
                                width: '100%'
                            }}
                        />
                        <div className='absolute bottom-[-1px] left-0 h-[20%] w-full bg-gradient-to-b'></div>
                        <div className="absolute top-3 right-3 border-white border grid place-content-center p-5 size-12 sm:w-7 sm:h-7 sm:text-sm rounded-full cursor-pointer hover:bg-white hover:text-black transition duration-300">
                            <IoClose
                                className='text-2xl'
                                onClick={handleCloseModal}
                            />
                        </div>
                        <div className='absolute flex items-center gap-5 bottom-5 left-10'>
                            <button className="bannerButton bg-[#e50914] text-white text-sm cursor-pointer">
                                <FaPlay className='h-5 min-w-5 text-white md:h-8 md:min-w-8' />Play</button>
                            <div className="border-white border grid place-content-center p-5 size-12 sm:w-7 sm:h-7 sm:text-sm rounded-full cursor-pointer hover:bg-white hover:text-black transition duration-300">
                                <FaPlus />
                            </div>
                        </div>
                    </div>
                    <div className={`${inter.className} py-4 px-6 flex flex-col gap-4`}>
                        <h3 className='text-white text-2xl font-bold'>{movieInfo?.title || movieInfo?.original_name}</h3>
                        <p className='text-sm'>{movieInfo?.overview}</p>
                        <h4>Movie details: <span className='font-bold'>{movieInfo?.title}</span></h4>
                        <div className='text-[12px] flex flex-col gap-1'>
                            <div>
                                <span className='text-[#777]'>Genres: </span>
                                <span>
                                    <Genres genreIds={movieInfo.genre_ids} />
                                </span>
                            </div>
                            <div>
                                <span className='text-[#777]'>Release Date: </span>
                                <span>{movieInfo?.release_date}</span>
                            </div>
                            <div >
                                <span className='text-[#777]'>Average Vote: </span>
                                <span>{movieInfo?.vote_average}</span>
                            </div>
                            <div>
                                <span className='text-[#777]'>Language: </span>
                                <span>{movieInfo?.original_language}</span>
                            </div>
                            <div>
                                <span className='text-[#777]'>Age Rate: </span>
                                <span>{age_rate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )

}
