'use client'
import { movieProps } from "@/types";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const DynamicHeader = dynamic(() => import("@/components/home/Header"),{ssr:false});

export function LazyHeader({ title, path, params }: { title: string, path:string, params:string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [movies, setMovies] = useState<movieProps[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lazyHeaderRef = headerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: "10px" } // Detecta antes de que sea visible
    );

    if (lazyHeaderRef) {
      observer.observe(lazyHeaderRef);
    }

    return () => {
      if (lazyHeaderRef) {
        observer.unobserve(lazyHeaderRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && movies.length === 0) {
      fetch(`https://api.themoviedb.org/3/${path}?api_key=${process.env.NEXT_PUBLIC_API_KEY_2}&language=en-US&page=1${params}`)
        .then((response) => response.json())
        .then((data) => setMovies(data?.results || []))
        .catch((err) => console.error("Error fetching movies:", err));
    }
    
  }, [isVisible, path, params, movies?.length]);

  return (
    <div ref={headerRef}>
      {
      isVisible 
      ? 
      <DynamicHeader title={title} movies={movies} /> 
      : null
      }
    </div>
  );
}