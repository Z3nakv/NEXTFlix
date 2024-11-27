
import SectionLayout from "@/components/layout/SectionLayout";
import Header from "@/pages/Home/Header";
import { fetchTopRatedData } from "@/utils/fecthData";
// import dynamic from "next/dynamic";
import Link from "next/link";
import { LazyRow } from "@/components/LazyRow";
import { LazyHeader } from "@/components/LazyBanner";
import TransitionLayout from "@/components/layout/TransitionLayout";

// const DynamicRow = dynamic(() => import("@/components/Row"));
// const DynamicLazyRow = dynamic(() => import("@/components/LazyRow"));

export default async function HomePage() {

  const fetchConfigurations = [
    { path: 'trending/all/day', params: '' },
    // { path: '/movie/upcoming', params: '' },
    // { path: 'tv/top_rated', params: '' },
    // { path: 'movie/top_rated', params: '' },
    // { path: 'discover/tv', params: '&with_networks=213' },
    // { path: 'discover/movie', params: '&with_genres=28' },
    // { path: 'discover/movie', params: '&with_genres=35' },
    // { path: 'discover/movie', params: '&with_genres=27' },
    // { path: 'discover/movie', params: '&with_genres=10749' },
    // { path: 'discover/movie', params: '&with_genres=99' },
  ];

  const [
    ...fetchedData
  ] = await Promise.all([
    ...fetchConfigurations.map(config => fetchTopRatedData(config.path, config.params)),
  ]);

  const [
    popularNow,
    // upcoming,
    // topRatedSeries,
    // topRatedMovies,
    // NEXTFlixOriginals,
    // action,
    // comedy,
    // horror,
    // romance,
    // documentary,
  ] = fetchedData;

  return (

    <main 
    className="h-full w-full relative transition"
    >
        <section>
          <Header movies={popularNow.results} title={'Trending Now'} />
        </section>
        <SectionLayout>
          <LazyRow title={'Top Rated Series'}
            path={'tv/top_rated'}
            params={''}
          // movies={topRatedSeries}
          />
          <LazyRow title={'Top Rated Movies'}
            path={'movie/top_rated'}
            params={''}
          // movies={topRatedMovies}
          />
        </SectionLayout>
        <section>
          <LazyHeader
            // movies={topRatedMovies}
            title={'Top Rated'}
            path={'movie/top_rated'}
            params={''}
          />
        </section>
        <SectionLayout>
          <LazyRow title={'Upcoming'}
            path={'movie/upcoming'}
            params={''}
          // movies={upcoming}
          />
          <LazyRow title={'Action'}
            path={'discover/movie'}
            params={'&with_genres=28'}
          // movies={action}
          />
        </SectionLayout>
        <section>
          <LazyHeader
            // movies={NEXTFlixOriginals}
            title={'NEXTFlix Originals'}
            path={'discover/tv'}
            params={'&with_networks=213'}
          />
        </section>
        <SectionLayout>
          <LazyRow title={'Comedy'}
            path={'discover/movie'}
            params={'&with_genres=35'}
          // movies={comedy}
          />
          <LazyRow title={'Horror'}
            path={'discover/movie'}
            params={'&with_genres=27'}
          // movies={horror}
          />
          <LazyRow title={'Romance'}
            path={'discover/movie'}
            params={'&with_genres=10749'}
          // movies={romance}
          />
          <LazyRow title={'Documentary'}
            path={'discover/movie'}
            params={'&with_genres=99'}
          // movies={documentary}
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
