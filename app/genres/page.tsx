import SectionLayout from '@/components/layout/SectionLayout';
import { LazyRow } from '@/components/LazyRow';
import Header from '@/pages/Home/Header';
import { fetchTopRatedData } from '@/utils/fecthData'
import Link from 'next/link';

export default async function page() {
  // https://api.themoviedb.org/3/discover/movie?api_key=TU_API_KEY&with_genres=28&sort_by=popularity.desc
  const response = await fetchTopRatedData('discover/movie','&with_genres=28&sort_by=popularity.desc');
  // console.log(response);
  
  return (
    <main className="h-full w-full relative">
    <section>
      <Header movies={response.results} title={'Trending Now'} />
    </section>
    <SectionLayout>
      <LazyRow title={'Upcoming'}
        path={'movie/upcoming'}
        params={''}
      // movies={topRatedSeries}
      />
      <LazyRow title={'Animation'}
        path={'discover/movie'}
        params={'&with_genres=16'}
      // movies={topRatedMovies}
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
