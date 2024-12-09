'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import { movieProps } from "@/types";
import TrendingMovie from "@/components/TrendingMovie";
import { usebackgroundIndex } from "@/store";
import { useMemo, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

export default function PopularSliderContainer({ popularMovies, title }: { popularMovies: movieProps[], title: string }) {
    const { screenWidth } = useWindowSize();
    const setBackgroundIndex = usebackgroundIndex(state => state.setBackgroundIndex);
    const [swiperReady, setSwiperReady] = useState(false);

    const showMovies = useMemo(() => {
        if (screenWidth >= 1800) return 20
        if (screenWidth >= 1400) return 16
        if (screenWidth >= 1024) return 12
        return 10
    }, [screenWidth])

    const lazyMovies = useMemo(() => {
        if (screenWidth >= 1500) return 8;
        if (screenWidth >= 1200) return 7;
        if (screenWidth >= 1024) return 6;
        if (screenWidth >= 800) return 5;
        if (screenWidth >= 600) return 4;
        return 3;
    }, [screenWidth]);

    const breakpoints = {
        300: { slidesPerView: 2, spaceBetween: 10 },
        600: { slidesPerView: 3, spaceBetween: 10 },
        800: { slidesPerView: 4, spaceBetween: 10 },
        1024: { slidesPerView: 5, spaceBetween: 10 },
        1200: { slidesPerView: 6, spaceBetween: 10 },
        1500: { slidesPerView: 7, spaceBetween: 10 },
        1800: { slidesPerView: 8, spaceBetween: 10 },
    }
    
    return (
        <Swiper
            slidesPerView={2}
            breakpoints={breakpoints}
            navigation
            modules={[Navigation, Autoplay]}
            // autoplay={{ delay: 10000 }}
            loop={true}
            onTransitionEnd={(swiper) => {
                setBackgroundIndex(swiper.realIndex.toString());  // Actualiza el fondo solo al finalizar
            }}
            onSwiper={() => setSwiperReady(true)}
            className="relative !overflow-visible h-full"
        >
            {
                swiperReady ?
                    popularMovies?.slice(0, showMovies).map((trendingMovie, index) => (
                        <SwiperSlide
                            key={trendingMovie.id}
                            className={`!transition !duration-300 mr-2.5 !aspect-[9/14]`}
                        >
                            <TrendingMovie
                                key={trendingMovie.id}
                                movie={trendingMovie}
                                image={trendingMovie.poster_path}
                                title={title}
                                index={index}
                                showMovies={lazyMovies}
                            />
                        </SwiperSlide>
                    ))
                : null
            }
        </Swiper>
    )
}
