'use client'
import { usebackgroundIndex } from "@/store";
import { movieProps } from "@/types";
import Image from "next/image";


export default function Banner({ movies, type } : { movies:movieProps[], type:string}) {
  
  const { backgroundIndex } = usebackgroundIndex();
  const backgroundImage = movies[+backgroundIndex];

  const imageProps = 
  type === 'Top Rated' 
    ? { loading: "lazy" as const } 
    : { priority: true as const };
 

  
  return (
    
      <div className="absolute top-0 left-0 -z-10 h-[720px] lg:h-[1080px] w-full">
        
        {
          backgroundImage &&
              <>
                <Image
                  src={`https://image.tmdb.org/t/p/original${backgroundImage?.backdrop_path}`}
                  alt={`${backgroundImage.original_title}`}
                  // fill
                  // sizes='80vw'
                  quality={100}
                  // priority
                  height={1080}
                  width={1920}
                  className={'saturate-[1.2] scrollMove aspect-[16/9] lg:object-[center_-150px] object-cover hidden lg:block bg-no-repeat'}
                  style={{
                    height:'100%',
                    width:'100%',
                    objectFit:'cover'
                  }}
                  {...imageProps}
                />
                <Image
                src={`https://image.tmdb.org/t/p/w780${backgroundImage?.poster_path}`}
                alt={`${backgroundImage?.original_title}`}
                className={'saturate-[1.2] scrollMove aspect-[9/16] object-cover lg:hidden md:object-[center_-100px] bg-no-repeat'}
                fill
                sizes='80vw'
                priority
                quality={100}
                style={{
                  height:'100%',
                  width:'100%',
                  objectFit:'cover'
                }}
                />
              </>
        }
      </div>

    
  )
}
