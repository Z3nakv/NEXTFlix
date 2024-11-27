'use client'
import TrendingMovie from "@/components/TrendingMovie";
import { movieProps } from "@/types";

export default function page() {

  const currentFavorites : movieProps[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return (
    <div className="mt-20 h-screenMovil">
      <div className="text-white font-bold text-lg mb-5 px-5">Your Favorites</div>

      {
        currentFavorites.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-3 p-2">
                        {
                            currentFavorites.map(item => (
                                <TrendingMovie
                                    key={item.id}
                                    movie={item}
                                    image={item.backdrop_path}
                                    title=""
                                />
                            ))
                        }
                    </div>
        )
      }
    </div>
  )
}
