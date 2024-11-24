
import SectionLayout from "@/components/layout/SectionLayout";
import Header from "@/pages/Home/Header";
import { fetchTopData, fetchTopRatedData } from "@/utils/fecthData";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicRow = dynamic(() => import("@/components/Row"))

export default async function NewAndPopular() {

  const fetchConfigurations = [
    { path: 'trending/tv/day', params: '' },
    { path: 'movie/upcoming', params: '' },
    { path: 'tv/top_rated', params: '' },
    { path: 'movie/top_rated', params: '' },
    { path: 'discover/tv', params: '&with_networks=213' },
    { path: 'discover/movie', params: '&with_genres=28' },
    { path: 'discover/movie', params: '&with_genres=35' },
    { path: 'discover/movie', params: '&with_genres=27' },
    { path: 'discover/movie', params: '&with_genres=10749' },
    { path: 'discover/movie', params: '&with_genres=99' },
  ];
  
  const [
    ...fetchedData
  ] = await Promise.all([
    fetchTopData(),
    ...fetchConfigurations.map(config => fetchTopRatedData(config.path, config.params)),
  ]);
  
  const [
    popularNow,
    upcoming,
    topRatedSeries,
    topRatedMovies,
    NEXTFlixOriginals,
    action,
    comedy,
    horror,
    romance,
    documentary
  ] = fetchedData;
  
  // console.log(popularNow);
  return (
    
      <main className="h-full w-full relative">
        <section>
          <Header movies={popularNow} title={'Trending Now'} />
        </section>
        <SectionLayout>
          <DynamicRow title={'Top Rated Series'}
            movies={topRatedSeries}
          />
          <DynamicRow title={'Top Rated Movies'}
            movies={topRatedMovies}
          />
        </SectionLayout>
        <section>
          <Header movies={topRatedMovies} title={'Top Rated'} />
        </section>
        <SectionLayout>
          <DynamicRow title={'Upcoming'}
            movies={upcoming}
          />
          <DynamicRow title={'Action'}
            movies={action}
          />
        </SectionLayout>
        <section>
          <Header movies={NEXTFlixOriginals} title={'NEXTFlix Originals'} />
        </section>
        <SectionLayout>
          <DynamicRow title={'Comedy'}
            movies={comedy}
          />
          <DynamicRow title={'Horror'}
            movies={horror}
          />
          <DynamicRow title={'Romance'}
            movies={romance}
          />
          <DynamicRow title={'Documentary'}
            movies={documentary}
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
