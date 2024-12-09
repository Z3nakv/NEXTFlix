
import SectionLayout from "@/components/layout/SectionLayout";
import { LazyHeader } from "@/components/home/LazyBanner";
import { LazyRow } from "@/components/LazyRow";
import Header from "@/components/home/Header";
import { fetchTopRatedData } from "@/utils/fecthData";
// import dynamic from "next/dynamic";
import Link from "next/link";

// const DynamicRow = dynamic(() => import("@/components/Row"))

export default async function TvShows() {

  const fetchConfigurations = [
    { path: 'trending/tv/day', params: ''},
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
    
    <main className="h-full w-full relative">
    <section>
      <Header movies={popularNow.results} title={'Trending Now'} />
    </section>
    <SectionLayout>
      <LazyRow title={'Reality'}
        path={'discover/tv'}
        params={'&with_genres=10764'}
      // movies={topRatedSeries}
      />
      <LazyRow title={'Top Rated Series'}
        path={'discover/tv'}
        params={''}
      // movies={topRatedMovies}
      />
    </SectionLayout>
    <section>
      <LazyHeader
        // movies={topRatedMovies} 
        title={'Fantasy'}
        path={'discover/tv'}
        params={'&with_genres=16'}
      />
    </section>
    <SectionLayout>
      <LazyRow title={'Crime'}
        path={'discover/tv'}
        params={'&with_genres=80'}
      // movies={upcoming}
      />
      <LazyRow title={'Discover'}
        path={'discover/tv'}
        params={'include_adult=false&include_video=false'}
      // movies={action}
      />
    </SectionLayout>
    <section>
      <LazyHeader
        // movies={NEXTFlixOriginals} 
        title={'Mistery'}
        path={'discover/tv'}
        params={'&with_genres=9648'}
      />
    </section>
    <SectionLayout>
      <LazyRow title={'Comedy'}
        path={'discover/tv'}
        params={'&with_genres=35'}
      // movies={comedy}
      />
      <LazyRow title={'Action & Adventure'}
        path={'discover/tv'}
        params={'&with_genres=10759'}
      // movies={horror}
      />
      <LazyRow title={'Romance'}
        path={'discover/tv'}
        params={'&with_genres=10749'}
      // movies={romance}
      />
      <LazyRow title={'Documentary'}
        path={'discover/tv'}
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
