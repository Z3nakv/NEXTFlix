import Image from 'next/image'
import { movieProps } from '@/types';
import { Inter } from 'next/font/google';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";

const inter = Inter({
    subsets: ['latin'],
})
export default function Modal({ movieInfo }: { movieInfo: movieProps }) {
    const age_rate = movieInfo.adult ? 'Only Adults' : 'For all public'
    return (
        <div className='relative h-screen w-screen'>
            <div className='bg-[#181818] rounded-lg absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white w-[90vw] max-w-[750px]'>
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
                    <div className='absolute bottom-0 left-0 h-[20%] w-full bg-gradient-to-b'></div>
                    <div className="absolute top-3 right-3 border-white border grid place-content-center p-5 size-12 sm:w-7 sm:h-7 sm:text-sm rounded-full cursor-pointer hover:bg-white hover:text-black transition duration-300">
                    <IoClose className='text-2xl' />
                    </div>
                    <div className='absolute flex items-center gap-5 bottom-5 left-10'>
                    <button className="bannerButton bg-[#e50914] text-white text-sm">
                    <FaPlay className='h-5 min-w-5 text-white md:h-8 md:min-w-8' />Play</button>
                    <div className="border-white border grid place-content-center p-5 size-12 sm:w-7 sm:h-7 sm:text-sm rounded-full cursor-pointer hover:bg-white hover:text-black transition duration-300">
                    <FaPlus />
                    </div>
                    </div>
                </div>
                <div className={`${inter.className} py-4 px-6 flex flex-col gap-4`}>
                    <h3 className='text-white text-2xl font-bold'>{movieInfo.title || movieInfo.original_name}</h3>
                    <p className='text-sm'>{movieInfo.overview}</p>
                    <h4>Movie details: <span className='font-bold'>{movieInfo.title}</span></h4>
                    <div className='text-[12px] flex flex-col gap-1'>
                        <div>
                            <span className='text-[#777]'>Genres: </span>
                            <span>Drama, Crime</span>
                        </div>
                        <div>
                            <span className='text-[#777]'>Release Date: </span>
                            <span>{movieInfo.release_date}</span>
                        </div>
                        <div >
                            <span className='text-[#777]'>Average Vote: </span>
                            <span>{movieInfo.vote_average}</span>
                        </div>
                        <div>
                            <span className='text-[#777]'>Language: </span>
                            <span>{movieInfo.original_language}</span>
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
}
