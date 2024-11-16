
import { fetchTopRatedData } from "@/utils/fecthData";
import SliderContainer from "./SliderContainer";
import { movieProps } from "@/types";

type RowProps = {
    title: string;
    // path: string
    // params: string
    movies: movieProps[]
};

export default async function Row({ title, movies }: RowProps) {

    return (
        <div 
        className="px-4 md:px-12 animate-dataFadeInUp">
            <h2 className="text-xl text-white font-bold mb-4">{title}</h2>
            <SliderContainer movies={movies} />
        </div>
    )
}
