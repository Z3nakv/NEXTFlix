import Header from '@/components/home/Header';
import SectionLayout from '@/components/layout/SectionLayout';
import { LazyRow } from '@/components/LazyRow';

import { fetchTopRatedData } from '@/utils/fecthData'
import Link from 'next/link';

type Params = Promise<{ mediaType: string, genre: string }>
type searchParams = Promise<{ page: string }>

export default async function page({ params, searchParams }: { params: Params, searchParams: searchParams }) {
    const { mediaType, genre } = await params;
    const { page } = await searchParams;
    // console.log(mediaType, genre, page);


    const response = await fetchTopRatedData(`discover/${mediaType}`, `&with_genres=${genre}&sort_by=popularity.desc`);

    const row = [];

    for (let i = 1; i <= +page; i++) {
        row.push({ path: `discover/${mediaType}`, params: `&with_genres=${genre}&page=${i}` })
    }

    return (

        <main className="h-full w-full relative">
            <section>
                <Header movies={response?.results} title={'Trending Now'} />
            </section>
            <SectionLayout>
                {
                    row && row.map((url, index) => (
                        <LazyRow
                            key={index}
                            title={''}
                            path={url.path}
                            params={url.params}
                        />
                    ))
                }
            </SectionLayout>


            <div className="w-full flex flex-col items-center py-4">
                <h2 className="text-white font-bold mb-3">Buscas mas contenido? Haz click aqui!</h2>
                <Link
                    href={`/${mediaType}/genres/${genre}?page=${+page + 1}`}
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
