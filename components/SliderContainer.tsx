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
    //     const rango = [];

    //     for (let i = 1; i <= 7; i++) {
    //         // Calculamos los índices de la izquierda y la derecha de manera circular
    //         const izquierda = (indice - i + longitudArray) % longitudArray;
    //         const derecha = (indice + i) % longitudArray;

    //         // Agregamos los índices con su respectiva clase
    //         rango.push({ indice: izquierda, clase: 'izquierda' });
    //         rango.push({ indice: derecha, clase: 'derecha' });
    //     }

    //     return rango;
    // }

    // const handleMouseOver = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    //     if(screenWidth < 720) return;
    //     const index = e.currentTarget?.dataset?.swiperSlideIndex;
    //     const parent = e.currentTarget?.parentElement;
    //     if (!parent) return;
    //     const childrenLength = Array.from(parent.children).length;
    //     const childrenArr = Array.from(parent.children);
    //     if (!index) return;
    //     const auxArr = obtenerRangoDeNumerosConClases(+index, childrenLength);

    //     childrenArr.forEach(item => {
    //         auxArr.forEach(auxItem => {
    //             if (+item?.dataset?.swiperSlideIndex === auxItem.indice) {
    //                 item.classList.add('opacity-30')
    //                 if (auxItem.clase === 'izquierda') {
    //                     item.classList.add('-translate-x-[20%]')
    //                 } else {
    //                     item.classList.add('translate-x-[20%]')
    //                 }
    //             }
    //         })
    //     })
    // }

    // const handleMouseOut = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    //     if(screenWidth < 720) return;
    //     const parent = e?.currentTarget?.parentElement;
    //     if (!parent) return;
    //     const childrenArr = Array.from(parent?.children);

    //     childrenArr.forEach(item => {
    //         if (item.classList.contains('opacity-30')) {
    //             item.classList.remove('opacity-30')
    //         }
    //         if (item.classList.contains('-translate-x-[20%]')) {
    //             item.classList.remove('-translate-x-[20%]')
    //         }
    //         if (item.classList.contains('translate-x-[20%]')) {
    //             item.classList.remove('translate-x-[20%]')
    //         }
    //     })
    // }

    // const rowRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     if (rowRef.current) {
    //         const observer = new IntersectionObserver(entries => {
    //             entries.forEach(entry => {
    //                 if (entry.isIntersecting) {
    //                     entry.target.classList.remove('opacity-0');
    //                     entry.target.classList.add('opacity-100');
    //                 } 
    //                 else {
    //                     entry.target.classList.remove('opacity-100');
    //                     entry.target.classList.add('opacity-0');
    //                 }
    //             });
    //         },
    //         {
    //             rootMargin: "0px 0px -100px 0px", // Ajusta el margen si es necesario
    //             threshold: 0.1, // Cambia cuando el 10% del elemento está visible
    //         }
    //     );

    //         // Inicia la observación del elemento `rowRef.current`
    //         observer.observe(rowRef.current);

    //         // Limpieza: desconectar el observador cuando el componente se desmonte
    //         return () => {
    //             if (rowRef.current) {
    //                 observer.unobserve(rowRef.current);
    //             }
    //         };
    //     }
    // }, []);

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
                        trendingMovie.backdrop_path &&
                        <SwiperSlide
                            key={trendingMovie.id}
                            className={`!transition !duration-300 overflow-hidden !w-auto mr-2.5`}
                        >
                                <TrendingMovie
                                    key={trendingMovie.id}
                                    movie={trendingMovie}
                                    image={trendingMovie.backdrop_path}
                                    title={trendingMovie.title}
                                />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
