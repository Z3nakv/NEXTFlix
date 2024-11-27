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
    // console.log(movies);
    
    return (
        <div>
            <Swiper
                slidesPerView={2}
                breakpoints={breakpoints}
                navigation
                modules={[Navigation, Autoplay]}
                // autoplay={{ delay: 2000 }}
                // loop={true}
                className="transition !duration-300 !overflow-visible"
                
            >
                {
                    movies &&
                    movies.slice(0,showMovies).map((trendingMovie) => (
                        
                        <SwiperSlide
                            key={trendingMovie.id}
                            className={`!transition !duration-300 overflow-hidden !w-auto mr-2.5`}
                        >
                                <TrendingMovie
                                    key={trendingMovie.id}
                                    movie={trendingMovie}
                                    image={trendingMovie.backdrop_path ? trendingMovie.backdrop_path : trendingMovie.still_path}
                                    title={trendingMovie.title}
                                />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
