'use client'
import { useState } from "react"
import { TiArrowSortedDown } from "react-icons/ti";
import NavbarGenreOption from "../NavbarGenreOption";
import { usePathname } from "next/navigation";
import { genresPanel } from "@/data";
import TransitionLink from "./TransitionLayout";

export default function NavbarLayout({ children }: { children: React.ReactNode }) {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const path = usePathname();
    const mediaType = path?.includes("movie") ? "movie" : "tv";

    const handleGenreSelect = () => {
        setShowOptions(false);
        setShowNavbar(false)
    };

    return (
        <>
            <div
                onClick={() => setShowNavbar(!showNavbar)}
            >
                <div
                    className="relative cursor-pointer flex gap-1 justify-center items-center md:hidden"
                >
                    <span className="">
                        Discover
                    </span>
                    <span>
                        <TiArrowSortedDown />
                    </span>
                </div>
                <div
                    className={`fixed inset-0 bg-black bg-opacity-60 backdrop-blur-[10px] transition-all duration-300 z-50
                ${showNavbar ? "opacity-100 visible" : "opacity-0 invisible"} md:bg-opacity-0 md:backdrop-blur-0 md:opacity-100 md:visible md:relative`}
                >
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:static md:translate-x-0 md:translate-y-0 flex flex-col justify-center items-center md:flex-row gap-10 md:gap-5">
                        {children}
                        <NavbarGenreOption setShowNavbar={setShowNavbar} setShowOptions={setShowOptions} />
                    </div>
                </div>
            </div>
            <div
                className={`fixed inset-0 bg-black bg-opacity-60 backdrop-blur-[10px] transition-all duration-300 z-50
                        ${showOptions ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
                <ul
                    className={`flex flex-col items-center gap-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 rounded-md shadow-lg`}
                >
                    {genresPanel &&
                        genresPanel[mediaType].genres.map((genre) => (
                            <li
                                key={genre.id}
                                className="headerLink text-nowrap"
                                onClick={handleGenreSelect}
                            >
                                <TransitionLink
                                    href={`/${mediaType}/genres/${genre.id}?page=2`}
                                >
                                    {genre.name}
                                </TransitionLink>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    )
}
