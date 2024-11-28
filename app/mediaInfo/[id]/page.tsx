
import SectionLayout from "@/components/layout/SectionLayout";
import { LazyRow } from "@/components/LazyRow";
import { movieProps } from "@/types";
import Image from "next/image";
import { FaPlay, FaStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import OpenTrailerButton from "@/components/ui/OpenTrailerButton";
import SeasonSelect from "@/components/SelectSeasons";
import MovieImages from "@/components/MovieImages";
import ActorsPosters from "@/components/ActorsPosters";
import ViewersReviews from "@/components/ViewersReviews";
import { fetchTopRatedData } from "@/utils/fecthData";
import { Suspense } from "react";

type Params = Promise<{ id: string }>

export default async function page({ params }: { params: Params }) {

    const { id } = await params;
    const [mediaId, mediaType] = id.split('-')
    const result : movieProps = await fetchTopRatedData(`${mediaType}/${mediaId}`,'&append_to_response=videos')
    const date = new Date(result.release_date || result.first_air_date || '');
    
    return (
        <>
            <div className="absolute inset-0 h-[50%] md:h-full w-full bg-gradient-to-b">

                {
                    result &&
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
                            className={'saturate-[1.2] scrollMove object-cover hidden md:block bg-no-repeat'}
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover'
                            }}
                        />
                        <Image
                            src={`https://image.tmdb.org/t/p/w780${result?.poster_path}`}
                            alt={`${result?.title || result?.name}`}
                            className={'saturate-[1.2] scrollMove object-cover block md:hidden bg-no-repeat'}
                            fill
                            sizes='100vw'
                            priority
                            quality={80}
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </>}

                <div className='absolute bottom-[-30px] left-0 h-[20%] w-full bg-gradient-to-b'></div>
            </div>


            <div className="relative h-auto md:h-full p-5 mt-[50vh] md:mt-[calc(15vh-1rem)] text-white">

                <div className="flex flex-col  gap-10  relative ">
                    <div className="flex flex-col gap-7 md:flex-row">
                        <div className="flex flex-col md:justify-top md:w-[50%] lg:w-[35%]">
                            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{result.title || result.name}</h1>
                            <div className="flex flex-col gap-2 text-gray-300">
                                <div className="flex items-center gap-5">
                                    <div className="flex text-lg items-center gap-1">
                                        <span className="text-yellow-300"><FaStar /></span>
                                        <span>{Math.floor(result.vote_average)}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span><IoTimeOutline /></span><span>{result.runtime}min</span>
                                    </div>
                                    <div>
                                        <span> {date.getFullYear()}</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 text-[11px] md:text-sm">
                                    {

                                        result.genres.slice(0, 3).map(genre => (
                                            <span key={genre.name}>• {genre.name}</span>
                                        ))

                                    }
                                </div>
                                <p className="text-sm md:text-lg text-gray-300 text-shadow mb-6 leading-relaxed">{result.overview}</p>
                            </div>
                            <div className="flex space-x-3 mt-10">
                                <button className="bg-[#E50914] text-white text-sm md:text-lg font-bold px-6 py-3 rounded-md hover:bg-red-400 transition">
                                    <FaPlay className="inline-block mr-2" /> Play
                                </button>
                                <OpenTrailerButton />
                            </div>
                        </div>
                        <div className="flex flex-col gap-10 md:gap-5 md:justify-center md:w-[50%] lg:w-[65%] overflow-hidden">

                            <Suspense fallback={<p className="text-white text-lg">Loading...</p>}>
                                <MovieImages mediaType={mediaType} mediaId={mediaId} />
                            </Suspense>

                            {
                                result.seasons &&
                                <SeasonSelect result={result} mediaId={mediaId} mediaType={mediaType} />
                            }

                            <ActorsPosters mediaType={mediaType} mediaId={mediaId} />
                        </div>
                    </div>

                    <ViewersReviews mediaType={mediaType} mediaId={mediaId} />

                </div>

                <SectionLayout>
                    <LazyRow title={'Recommendations'} path={`${mediaType}/${mediaId}/similar`} params={''} />
                </SectionLayout>
            </div>
        </>
    )
}
