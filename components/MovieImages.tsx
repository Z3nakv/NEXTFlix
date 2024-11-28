import Image from 'next/image';
import React from 'react'

type MovieImagesType = {
    mediaType: string
    mediaId: string
}

type responseImageProps = {
    file_path: string
}

export default async function movieImages({mediaType, mediaId} : MovieImagesType) {

    const images = await fetch(`https://api.themoviedb.org/3/${mediaType}/${mediaId}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY_2}`)
    const responseImages = await images.json();
    const imagesPosters : responseImageProps[] = responseImages.backdrops; 
  return (
    <>
        {
            imagesPosters ?
                <div>
                    <h2 className="text-lg font-bold">Posters</h2>
                    <div className="flex w-auto gap-4 overflow-auto scroller p-2 bg-[#141414] rounded-lg my-2">
                        {imagesPosters.slice(0, 8).map((poster, index) => (
                            <div key={index} className="h-[150px] w-[220px] flex-shrink-0 overflow-hidden rounded-md bg-black">
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${poster.file_path}`}
                                    alt="gallery"
                                    width={300}
                                    height={200}
                                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                : null
        }
    </>
  )
}
