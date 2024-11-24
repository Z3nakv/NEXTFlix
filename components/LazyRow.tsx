'use client'
import { MyMovieLoader } from "@/skeletons/BannerSkeleton";
import { movieProps } from "@/types";
import { fetchTopRatedData } from "@/utils/fecthData";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const DynamicRow = dynamic(() => import("@/components/Row"),{ssr:false, loading:() => <MyMovieLoader />});

export function LazyRow({ title, path, params }: { title: string, path:string, params:string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [movies, setMovies] = useState<movieProps[]>([]);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lazyRowRef = rowRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: "10px" } // Detecta antes de que sea visible
    );

    if (lazyRowRef) {
      observer.observe(lazyRowRef);
    }

    return () => {
      if (lazyRowRef) {
        observer.unobserve(lazyRowRef);
      }
    };
  }, []);

  useEffect(() => {
      async function requestData(){
        if (isVisible && movies.length === 0) {
        // fetch(`https://api.themoviedb.org/3/${path}?api_key=2a8e8430bbef22eac05ac10b009857ef&language=en-US&page=1${params}`)
        //   .then((response) => response.json())
        //   .then((data) => setMovies(data.results || []))
        //   .catch((err) => console.error("Error fetching movies:", err));
        const response = await fetchTopRatedData(path, params);
        
        setMovies(response.results ? response.results : response.episodes)
        }
      }
      requestData()
  }, [isVisible, path, params, movies.length]);
  return (
    <div ref={rowRef}>
      {isVisible ? <DynamicRow title={title} movies={movies} /> : null}
    </div>
  );
}