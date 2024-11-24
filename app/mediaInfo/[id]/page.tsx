

import SectionLayout from "@/components/layout/SectionLayout";
import { LazyRow } from "@/components/LazyRow";
import { movieProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaTrailer, FaStar } from "react-icons/fa";
import profile from '../../../public/profile-placeholder.webp';
import { IoTimeOutline } from "react-icons/io5";
import { fetchTopRatedData } from "@/utils/fecthData";

type Params = Promise<{ id: string }>

export default async function page({ params }: { params: Params }) {

    const { id } = await params;
    const [mediaId, mediaType] = id.split('-')
    const response = await fetch(`https://api.themoviedb.org/3/${mediaType}/${mediaId}?&append_to_response=videos&api_key=${process.env.NEXT_PUBLIC_API_KEY_2}`);
    const result: movieProps = await response.json();
    const date = new Date(result.release_date || result.first_air_date);
    // console.log(result);

    const images = await fetch(`https://api.themoviedb.org/3/${mediaType}/${mediaId}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY_2}`)
    const responseImages = await images.json();
    // const posters = responseImages.backdrops.slice(0, 4)

    const actorsPosters = await fetch(`http://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY_2}`);
    const responseActorsPosters = await actorsPosters.json() || null;
    // console.log(responseActorsPosters);

    const movieReviews = await fetch(`https://api.themoviedb.org/3/${mediaType}/${mediaId}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY_2}`)
    const responseReviews = await movieReviews.json();
    // console.log(responseReviews);

    // const episodes = await fetch(`https://api.themoviedb.org/3/${mediaType}/${mediaId}/season/1?api_key=${process.env.NEXT_PUBLIC_API_KEY_2}`)
    // const responseEpisodes = await episodes.json();
    // const episodesasd = await fetchTopRatedData(`${mediaType}/${mediaId}/season/1`, '')
    // console.log(episodesasd);


    // const actorMovies = await fetch(`https://api.themoviedb.org/3/person/${actor_id}/movie_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY_2}`)

    return (
        <>
            <div className="absolute inset-0 h-[50%] md:h-screen w-full bg-gradient-to-b">
                <>
                    <Image
                        src={`https://image.tmdb.org/t/p/original${result?.backdrop_path}`}
                        alt={`${result?.title || result?.name}`}
                        // fill
                        // sizes='80vw'
                        quality={100}
                        height={1080}
                        width={1920}
                        priority
                        className={'saturate-[1.2] scrollMove aspect-[16/9] object-cover hidden md:block bg-no-repeat'}
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover'
                        }}
                    />
                    <Image
                        src={`https://image.tmdb.org/t/p/w780${result?.poster_path}`}
                        alt={`${result?.title || result?.original_name}`}
                        className={'saturate-[1.2] scrollMove aspect-[9/16] object-cover block md:hidden bg-no-repeat'}
                        fill
                        sizes='100vw'
                        priority
                        quality={100}
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </>
                <div className='absolute bottom-[-30px] left-0 h-[20%] w-full bg-gradient-to-b'></div>
            </div>

            <div className="relative h-auto md:h-screen p-5 mt-[50vh] text-white md:mt-[calc(50vh-5rem)]">

                <div className="flex flex-col justify-end gap-10 h-full relative ">
                    <div className="flex flex-col gap-10 md:flex-row">
                        <div className="flex flex-col md:justify-center">
                            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{result.title || result.name}</h1>
                            <div className="flex flex-col gap-2 text-gray-300">
                                <div className="flex items-center gap-5">
                                    <div className="flex text-lg items-center gap-1">
                                        <span className="text-yellow-300"><FaStar /></span>
                                        <span>{result.vote_average}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span><IoTimeOutline /></span><span>{result.runtime}min</span>
                                    </div>
                                    <div>
                                        <span> {date.getFullYear()}</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {

                                        result.genres.map(genre => (
                                            <span key={genre.name}>• {genre.name}</span>
                                        ))

                                    }
                                </div>
                                <p className="text-sm md:text-lg text-gray-300 mb-6 leading-relaxed">{result.overview}</p>
                            </div>
                            <div className="flex space-x-3 mt-10">
                                <button className="bg-[#E50914] text-white text-sm md:text-lg font-bold px-6 py-3 rounded-md hover:bg-red-600 transition">
                                    <FaPlay className="inline-block mr-2" /> Play
                                </button>
                                <button className="bg-gray-700/80 text-sm md:text-lg font-bold px-6 py-3 rounded-md hover:bg-gray-600 transition">
                                    <FaTrailer className="inline-block mr-2" /> Show Trailer
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10 md:w-[50%] md:justify-center">
                            {
                                responseImages.backdrops ?
                                    <div>
                                        <h2 className="text-lg font-bold">Posters</h2>
                                        <div className="flex w-auto gap-4 overflow-auto scroller p-2 bg-[#141414] rounded-lg my-2">
                                            {responseImages.backdrops.slice(0, 8).map((poster, index) => (
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
                            {/* <>
                                {
                                    responseEpisodes.episodes ?
                                        <div>
                                            <h2 className="text-lg font-bold">{responseEpisodes.name}</h2>
                                            <div className="flex w-auto gap-4 overflow-auto scroller p-2 bg-[#141414] rounded-lg my-2">
                                                {
                                                    responseEpisodes.episodes.map(episode => (
                                                        <div
                                                            key={episode.id}
                                                            className="h-[150px] w-[220px] flex-shrink-0 overflow-hidden rounded-md bg-black">
                                                            <Image
                                                                src={`https://image.tmdb.org/t/p/w780${episode?.still_path}`}
                                                                alt={`${episode.name}`}
                                                                width={300}
                                                                height={200}
                                                                // fill
                                                                // sizes="80vw"
                                                                className="object-cover h-full w-full"
                                                            />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        : null
                                }
                            </> */}
                            {
                                mediaType === 'tv' ?
                                    <div className="md:ml-[-50px]">
                                        <LazyRow title={'Season 1'} path={`${mediaType}/${mediaId}/season/1`} params={''} />
                                    </div>
                                    : null
                            }

                            <>
                                {responseActorsPosters.cast ?
                                    <div>
                                        <h2 className="text-lg font-bold">Reparto</h2>
                                        <div className="flex gap-4 overflow-auto scroller">
                                            {
                                                responseActorsPosters?.cast?.slice(0, 10).map((actor, index) => (
                                                    <div key={index} className="text-center text-gray-300 my-2">
                                                        <Link href={'/'} className="grid place-content-center h-[100px] w-[100px] rounded-full overflow-hidden bg-gray-700 hover:bg-gray-800 transition">
                                                            <Image
                                                                src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : profile.src}
                                                                alt={actor.name}
                                                                width={300}
                                                                height={300}
                                                                className="object-cover h-full w-full"
                                                            />
                                                        </Link>
                                                        <p className="text-[12px] font-semibold text-white mt-2">{actor.name}</p>
                                                    </div>
                                                ))

                                            }
                                        </div>
                                    </div>
                                    : null
                                }
                            </>
                        </div>
                    </div>
                    {
                        responseReviews.results.length > 0 ?
                            <>
                                <h2 className="text-lg font-bold">Reviews</h2>
                                
                                    <div className="flex md:flex-shrink-0  gap-5 scroller p-2 h-auto min-w-full overflow-x-scroll bg-[#141414] rounded-md">
                                        {responseReviews.results.map((review, index) => (
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
                    }
                </div>
            </div>
            <SectionLayout>
                <LazyRow title={'Recommendations'} path={`${mediaType}/${mediaId}/similar`} params={''} />
            </SectionLayout>
        </>
    )
}
