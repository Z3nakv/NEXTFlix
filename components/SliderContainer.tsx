'use client'
import TrendingMovie from "./TrendingMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import { movieProps } from "@/types";
import { useMemo } from "react";
import useWindowSize from "@/hooks/useWindowSize";

export default function SliderContainer({ movies }: { movies: movieProps[] }) {
    const { screenWidth } = useWindowSize();
    
    const breakpoints = {
        300: { slidesPerView: 1, spaceBetween: 10 },
        600: { slidesPerView: 2, spaceBetween: 10 },
        800: { slidesPerView: 3, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 10 },
        1200: { slidesPerView: 4, spaceBetween: 10 },
        1500: { slidesPerView: 4, spaceBetween: 10 },
        1800: { slidesPerView: 4, spaceBetween: 10 },
    }

    const showMovies = useMemo(() => {
        if (screenWidth >= 1800) return 20
        if (screenWidth >= 1400) return 16
        if (screenWidth >= 1024) return 12
        return 10
    }, [screenWidth])
    
    return (
        <div>
            <Swiper
                slidesPerView={2}
                breakpoints={breakpoints}
                navigation={{
                    nextEl: '.swiper-button-horizontal-next',
                    prevEl: '.swiper-button-horizontal-prev',
                }}
                modules={[Navigation, Autoplay]}
                className="transition !duration-300 !overflow-visible"
                
            >
                {
                    movies &&
                    movies.slice(0,showMovies).map((trendingMovie) => (
                        
                        <SwiperSlide
                            key={trendingMovie.id}
                            className={`!transition !duration-300 overflow-hidden !h-auto !w-auto mr-2.5`}
                        >
                                <TrendingMovie
                                    key={trendingMovie.id}
                                    movie={trendingMovie}
                                    image={trendingMovie.backdrop_path ? trendingMovie.backdrop_path : trendingMovie.still_path}
                                    title={trendingMovie.title}
                                    index={0}
                                    showMovies={1}
                                />
                        </SwiperSlide>
                    ))
                }

                <div 
                className="absolute left-[-15px] md:left-[-48px] top-[50%] translate-y-[-50%] z-50 cursor-pointer h-full w-[100px] flex justify-start items-center bg-arrowShadowLeft
                            transition duration-300 opacity-0 hover:opacity-100">
                    <div
                    className="swiper-button-horizontal-prev text-[50px] text-white font-bold pl-2">
                        {'<'}
                    </div>
                </div>
                <div 
                className="absolute right-[-15px] md:right-[-48px] top-[50%] translate-y-[-50%] z-50 cursor-pointer h-full w-[100px] flex justify-end items-center bg-arrowShadowRight
                            transition duration-300 opacity-0 hover:opacity-100">
                    <div
                    className="swiper-button-horizontal-next text-[50px] text-white font-bold pr-2">
                        {'>'}
                    </div>
                </div>
            </Swiper>
        </div>
    )
}
