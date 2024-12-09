
import SectionLayout from "@/components/layout/SectionLayout";
import Header from "@/components/home/Header";
import { fetchTopRatedData } from "@/utils/fecthData";
import Link from "next/link";
import { LazyRow } from "@/components/LazyRow";
import { LazyHeader } from "@/components/home/LazyBanner";

export default async function HomePage() {

  const fetchConfigurations = [
    { path: 'trending/all/day', params: '' },
  ];

  const [
    ...fetchedData
  ] = await Promise.all([
    ...fetchConfigurations.map(config => fetchTopRatedData(config.path, config.params)),
  ]);

  const [
    popularNow,
  ] = fetchedData;

  return (

    <main 
    className="h-full w-full relative transition"
    >
        <section>
          <Header movies={popularNow?.results} title={'Trending Now'} />
        </section>
        <SectionLayout>
          <LazyRow title={'Top Rated Series'}
            path={'tv/top_rated'}
            params={''}
          />
          <LazyRow title={'Top Rated Movies'}
            path={'movie/top_rated'}
            params={''}
          />
        </SectionLayout>
        <section>
          <LazyHeader
            title={'Top Rated'}
            path={'movie/top_rated'}
            params={''}
          />
        </section>
        <SectionLayout>
          <LazyRow title={'Upcoming'}
            path={'movie/upcoming'}
            params={''}
          />
          <LazyRow title={'Action'}
            path={'discover/movie'}
            params={'&with_genres=28'}
          />
        </SectionLayout>
        <section>
          <LazyHeader
            title={'NEXTFlix Originals'}
            path={'discover/tv'}
            params={'&with_networks=213'}
          />
        </section>
        <SectionLayout>
          <LazyRow title={'Comedy'}
            path={'discover/movie'}
            params={'&with_genres=35'}
          />
          <LazyRow title={'Horror'}
            path={'discover/movie'}
            params={'&with_genres=27'}
          />
          <LazyRow title={'Romance'}
            path={'discover/movie'}
            params={'&with_genres=10749'}
          />
          <LazyRow title={'Documentary'}
            path={'discover/movie'}
            params={'&with_genres=99'}
          />
        </SectionLayout>
        <div className="w-full flex flex-col items-center py-4">
          <h2 className="text-white font-bold mb-3">Buscas mas contenido? Haz click aqui!</h2>
          <Link
            href={'/movies'}
            aria-label="Navegar a la sección de películas"
            className="text-white font-bold border-2 border-white px-6 py-3 rounded-lg transition duration-400 hover:bg-white hover:text-black"
            passHref
          >
            ver mas
          </Link>
        </div>

    </main>

  )
}
