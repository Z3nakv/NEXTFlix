import { FaPlus, FaMinus, FaPlay, FaChevronDown } from "react-icons/fa";
import Genres from "./Genres";
import { movieProps } from "@/types";
import { usebackgroundIndex } from "@/store";

export default function MovieCardDetails({ genreIds, movie }: { genreIds: number[], movie: movieProps }) {
    // const worker = new Worker('MovieCardDetails.tsx')
    // console.log(worker);
    
    const { setOpenModal } = usebackgroundIndex();
    return (
        <div className={`text-[12px] flex flex-col gap-2 sm:gap-1 absolute translate-x-6 md:translate-x-4 transition duration-500 opacity-0 
        group-hover:-translate-y-32 sm:group-hover:-translate-y-24 group-hover:visible group-hover:opacity-100
        `}>
            <div className="flex gap-3 md:gap-1">
                <div className="border-white border grid place-content-center w-10 h-10 sm:w-7 sm:h-7 sm:text-sm rounded-full bg-white text-black hover:opacity-70 transition duration-300">
                    <FaPlay />
                </div>
                <div className="border-white border grid place-content-center w-10 h-10 sm:w-7 sm:h-7 sm:text-sm rounded-full hover:bg-white hover:text-black transition duration-300">
                    <FaPlus />
                </div>
                <div 
                className="border-white border grid place-content-center w-10 h-10 sm:w-7 sm:h-7 sm:text-sm rounded-full hover:bg-white hover:text-black transition duration-300"
                onClick={()=>{setOpenModal(true, movie)}}
                >
                    <FaChevronDown />
                </div>
            </div>
            <h2 className="font-bold text-[1em] overflow-hidden">{movie.title || movie.original_name}</h2>
            <div>
                <Genres genreIds={genreIds} />
            </div>
        </div>
    )
}
