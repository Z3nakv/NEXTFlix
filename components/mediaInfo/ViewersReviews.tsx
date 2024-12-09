import Image from 'next/image'
import React from 'react'
import profile from '../../public/profile-placeholder.webp';
import { viewersReviews } from '@/types';

type MovieImagesType = {
    mediaType: string
    mediaId: string
}

export default async function ViewersReviews({mediaType, mediaId} : MovieImagesType) {
    const movieReviews = await fetch(`https://api.themoviedb.org/3/${mediaType}/${mediaId}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY_2}`)
    const responseReviews = await movieReviews.json();
    const reviews : viewersReviews[] = responseReviews.results;
    
  return (
    <div>{
        reviews.length > 0 ?
            <>
                <h2 className="text-lg font-bold">Reviews</h2>

                <div className="flex md:flex-shrink-0  gap-5 scroller p-2 h-auto min-w-full overflow-x-scroll bg-[#141414] rounded-md">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex flex-col gap-3 scroller text-white font-bold p-5 border border-gray-600 rounded-lg text-xs max-h-[300px] overflow-y-auto min-w-[400px]  md:max-w-[400px] bg-[#333]">
                            <div className="flex justify-between items-center">
                                <h2 className="text-sm">
                                    <span>Author: </span><span className="text-gray-300">{review.author}</span>
                                </h2>
                                <div className="relative h-[50px] w-[50px] grid place-content-center rounded-full overflow-hidden bg-gray-800">
                                    <Image
                                        src={
                                            review.author_details.avatar_path
                                                ? `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`
                                                : profile.src
                                        }
                                        alt="profile"
                                        className="object-cover"
                                        fill
                                    />
                                </div>
                            </div>
                            <p className="text-gray-400 text-[11px]">{review.content}</p>
                        </div>
                    ))}
                </div>

            </>
            : null
    }</div>
  )
}
