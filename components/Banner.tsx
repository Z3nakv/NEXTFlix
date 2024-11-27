'use client'
import useWindowSize from "@/hooks/useWindowSize";
import { usebackgroundIndex } from "@/store";
import { movieProps } from "@/types";
import Image from "next/image";

export default function Banner({ movies, type } : { movies:movieProps[], type:string}) {
  
  const { backgroundIndex } = usebackgroundIndex();
  const backgroundImage = movies[+backgroundIndex];

  const { screenWidth } = useWindowSize();
  const isMobile = screenWidth < 800;

  const imageProps =
  type === 'Trending Now'
  ? { priority: true as const }
  : { loading: "lazy" as const } 

  return (
    
      <div className={`absolute top-0 left-0 -z-10 h-full w-full`}>
        
        {
          backgroundImage &&
              <>
                <Image
                  src={`https://image.tmdb.org/t/p/original${backgroundImage?.backdrop_path}`}
                  alt={`${backgroundImage?.title || backgroundImage?.name}`}
                  // fill
                  // sizes='100vw'
                  quality={100}
                  height={1080}
                  width={1920}
                  className={'saturate-[1.2] scrollMove object-cover hidden md:block bg-no-repeat'}
                  style={{
                    height:'100%',
                    width:'100%',
                    objectFit:'cover'
                  }}
                  {...(!isMobile && imageProps)}
                />
                <Image
                src={`https://image.tmdb.org/t/p/w780${backgroundImage?.poster_path}`}
                alt={`${backgroundImage?.title || backgroundImage?.original_name}`}
                className={'saturate-[1.2] scrollMove object-cover md:hidden bg-no-repeat'}
                fill
                sizes='100vw'
                quality={100}
                style={{
                  height:'100%',
                  width:'100%',
                  objectFit:'cover'
                }}
                {...(isMobile && imageProps)}
                />
              </>
        }
      </div>

    
  )
}
