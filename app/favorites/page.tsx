'use client'
import TrendingMovie from "@/components/TrendingMovie";
import { usebackgroundIndex } from "@/store";

export default function Page() {

  const favorites = usebackgroundIndex(state =>state.favoriteMovies);

  return (
    <div className="my-20">
      <div className="text-white font-bold text-lg mb-5 px-5">Your Favorites</div>

      {
        favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-3 p-2">
                        {
                            favorites.map((item) => (
                                <TrendingMovie
                                    key={item.id}
                                    movie={item}
                                    image={item.backdrop_path || item.still_path}
                                    title=""
                                    showMovies={1}
                                    index={0}
                                />
                            ))
                        }
                    </div>
        )
        : <p className='text-white text-shadow text-center font-bold'>No favorites has been saved yet...</p>
      }
    </div>
  )
}
