import Image from 'next/image';
import Link from 'next/link';
import profile from '../../public/profile-placeholder.webp';
import { actorPoster } from '@/types';

type MovieImagesType = {
    mediaType: string
    mediaId: string
}

export default async function ActorsPosters({mediaType, mediaId} : MovieImagesType) {
    const actorsPosters = await fetch(`http://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY_2}`);
    const responseActorsPosters = await actorsPosters.json() || null;
    const actorPoster : actorPoster[] = responseActorsPosters.cast;
    
  return (
    <>
                                    {responseActorsPosters.cast ?
                                        <div>
                                            <h2 className="text-lg font-bold">Reparto</h2>
                                            <div className="flex gap-4 overflow-auto scroller">
                                                {
                                                    actorPoster.slice(0, 10).map((actor, index) => (
                                                        <div key={index} className="text-center text-gray-300 my-2">
                                                            <Link href={`/mediaInfo/actor/${actor.id}?page=1`} className="grid place-content-center h-[100px] w-[100px] rounded-full overflow-hidden bg-gray-700 hover:bg-gray-800 transition">
                                                                <Image
                                                                    src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : profile.src}
                                                                    alt={actor.name}
                                                                    width={300}
                                                                    height={300}
                                                                    className="object-cover h-full w-full"
                                                                />
                                                            </Link>
                                                            <p className="text-[12px] font-semibold text-shadow mt-2">{actor.name}</p>
                                                        </div>
                                                    ))

                                                }
                                            </div>
                                        </div>
                                        : null
                                    }
                                </>
  )
}
