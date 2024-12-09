'use client'
import { movieProps } from "@/types";
import PopularSliderContainer from "@/components/home/PopularSliderContainer";

type popularNowProps = {
    popularMovies: movieProps[],
    title: string
}

export default function PopularNow({ popularMovies, title }: popularNowProps) {
    
    return (
        <div
            className="relative animate-dataFadeInUp"
        >
            <h2 className="text-xl text-white font-bold mb-4">{title}</h2>

            <PopularSliderContainer popularMovies={popularMovies} title={title} />

        </div>
    )
}
