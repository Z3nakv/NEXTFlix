import SectionLayout from "@/components/layout/SectionLayout";
import PopularNow from "@/components/PopularNow";
import TrendingMovie from "@/components/TrendingMovie";
import { movieProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Params = Promise<{ id: string}>
type searchParams = Promise<{ page: string }>

export default async function page({ params,searchParams }: { params: Params, searchParams:searchParams }) {

  const { id } = await params;
  const { page } = await searchParams;
  
  const actorMovies = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY_2}`)
  const responseActor = await actorMovies.json();

  const mediaInfo = await fetch(`https://api.themoviedb.org/3/person/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY_2}`)
  const responseInfo = await mediaInfo.json();
  const works : movieProps[] = responseInfo.cast.slice(20);
  const actorwork: movieProps[] = responseInfo.cast.slice(0, 20);
  const moviesSlice = +page * 20
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="p-10 pb-0 flex flex-col gap-5 lg:gap-32 justify-center lg:justify-between items-center mt-10 md:flex-row md:max-w-[1000px] lg:max-w-[1200px]">
          <div className="relative h-[250px] w-[250px] lg:h-[300px] lg:w-[300px] object-cover rounded-full overflow-hidden md:flex-shrink-0">
            <Image
              src={`https://image.tmdb.org/t/p/w500${responseActor.profile_path}`}
              alt={responseActor.name}
              className={'saturate-[1.2] scrollMove object-top bg-no-repeat'}
                fill
                sizes='80vw'
                quality={100}
                style={{
                  height:'100%',
                  width:'100%',
                  objectFit:'cover'
                }}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2 text-shadow">
            <h1 className="text-2xl font-bold">{responseActor.name}</h1>
            <p className="">{responseActor.birthday}</p>
            <p className="text-[12px]">{responseActor.biography}</p>
          </div>
        </div>
      </div>
      <div className="px-10">
        {actorwork && (
          <SectionLayout>
            <PopularNow title={"Work"} popularMovies={actorwork} />
          </SectionLayout>
        )}
      </div>

      <h2 className="text-shadow text-xl font-bold px-10">More work from the artist...</h2>

      <SectionLayout>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-3">
          {
            works.slice(20, moviesSlice).map((movie, index) => (
              <TrendingMovie
                key={movie.id}
                movie={movie}
                image={movie.backdrop_path}
                title={''}
                index={index}
                showMovies={0}
              />
            ))
          }
        </div>

      </SectionLayout>
      <div className="w-full flex flex-col items-center py-4">
        <h2 className="text-white font-bold mb-3">Buscas mas contenido del Artista? Haz click aqui!</h2>
        <Link
          href={`/mediaInfo/actor/${id}?page=${+page + 1}`}
          aria-label="Navegar a la sección de películas"
          className="text-white font-bold border-2 border-white px-6 py-3 rounded-lg transition duration-400 hover:bg-white hover:text-black"
          passHref
        >
          ver mas
        </Link>
      </div>
    </div>
  );
}
