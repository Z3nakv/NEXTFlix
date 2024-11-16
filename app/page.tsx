
import Footer from "@/components/Footer";
import SectionLayout from "@/components/layout/SectionLayout";
import Navbar from "@/components/Navbar";
import Header from "@/pages/Home/Header";
import { fetchPopularNowData, fetchTopData, fetchTopRatedData } from "@/utils/fecthData";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicRow = dynamic(() => import("@/components/Row"))

export default async function HomePage() {

  const [
    popularNow,
    topData,
    upcoming,
    topRatedSeries,
    topRatedMovies,
    NEXTFlixOriginals,
    action,
    comedy,
    horror,
    romance,
    documentary,
  ] = await Promise.all([
    fetchPopularNowData(),
    fetchTopData(),
    fetchTopRatedData('/movie/upcoming', ''),
    fetchTopRatedData('tv/top_rated', ''),
    fetchTopRatedData('movie/top_rated', ''),
    fetchTopRatedData('discover/tv', '&with_networks=213'),
    fetchTopRatedData('discover/movie', '&with_networks=28'),
    fetchTopRatedData('discover/movie', '&with_networks=35'),
    fetchTopRatedData('discover/movie', '&with_networks=27'),
    fetchTopRatedData('discover/movie', '&with_networks=10749'),
    fetchTopRatedData('discover/movie', '&with_networks=99'),
  ])

  return (
    <div>
      <main className="h-full w-full relative">
        <Navbar />
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
          <Header movies={topData} title={'Top Rated'} />
        </section>
        <SectionLayout>
          <DynamicRow title={'NEXTFlix Originals'}
            movies={NEXTFlixOriginals}
          // path={'discover/tv'}
          // params={'&with_networks=213'}
          />
          <DynamicRow title={'Action'}
            movies={action}
          // path={'discover/movie'}
          // params={'&with_genres=28'}
          />
        </SectionLayout>
        <section>
          <Header movies={NEXTFlixOriginals} title={'NEXTFlix Originals'} />
        </section>
        <SectionLayout>
          <DynamicRow title={'Comedy'}
            movies={comedy}
          // path={'discover/movie'}
          // params={'&with_genres=35'}
          />
          <DynamicRow title={'Horror'}
            movies={horror}
          // path={'discover/movie'}
          // params={'&with_genres=27'}
          />
          <DynamicRow title={'Romance'}
            movies={romance}
          // path={'discover/movie'}
          // params={'&with_genres=10749'}
          />
          <DynamicRow title={'Documentary'}
            movies={documentary}
          // path={'discover/movie'}
          // params={'&with_genres=99'}
          />
        </SectionLayout>
      </main>
      <div className="w-full flex flex-col items-center py-4">
        <p className="text-white font-bold mb-3">Buscas mas contenido? Click aqui!</p>
        <Link href={'/movies'}>
          <button className="text-white font-bold border-2 border-white px-6 py-3 rounded-lg transition duration-400 hover:bg-white hover:text-black">More</button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}
