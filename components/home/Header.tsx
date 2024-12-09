'use client'
import Banner from "@/components/home/Banner";
import { MyDataLoader, PopularNowSkeleton } from "@/skeletons/BannerSkeleton";
import { movieProps } from "@/types";
import dynamic from "next/dynamic";

const DynamicRow = dynamic(() => import("@/components/home/PopularNow"),
  {
    ssr: false,
    loading: () => <PopularNowSkeleton />,
  }
)
const DynamicMovieData = dynamic(() => import("@/components/MovieData"),
  {
    ssr: false,
    loading: () => <MyDataLoader />,
  }
)

type headerProps = {
  movies: movieProps[]
  title: string
}

export default function Header({ movies, title }: headerProps) {

  return (
    <div className="relative h-screen p-10 bg-gradient-to-b block overflow-hidden">
      <div className='absolute top-[-10px] left-0 h-[20%] w-full bg-gradient-to-t'></div>

      <Banner movies={movies} type={title} />

      <div className="flex flex-col justify-end h-full relative">

        <DynamicMovieData movies={movies} />

        <DynamicRow title={title} popularMovies={movies} />

      </div>
    </div>
  )
}
