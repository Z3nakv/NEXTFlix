import TrendingMovie from "@/components/TrendingMovie";
import { movieProps } from "@/types";
import { fetchTopRatedData } from "@/utils/fecthData";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function page({ searchParams }: { searchParams: SearchParams }) {
    const { query } = await searchParams;
    const response = await fetchTopRatedData('search/multi', `&query=${query}`);
    const movies: movieProps[] = response.results;

    return (
        <div className="mt-20 p-5">
            <div className='text-white font-bold text-lg mb-5'>Search results for: {query}</div>
            {
                query ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-3">
                        {
                            movies.map(item => (
                                <TrendingMovie
                                    key={item.id}
                                    movie={item}
                                    image={item.backdrop_path}
                                    title=""
                                    index={0}
                                    showMovies={1}
                                />
                            ))
                        }
                    </div>
                )
                    : <p className="text-white font-bold text-center">Theres no result for this search...</p>
            }
        </div>
    )
}
