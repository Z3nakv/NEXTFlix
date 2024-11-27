
import profile from '../public/profile-placeholder.webp';
import SearchInput from "./ui/SearchInput";
import TransitionLink from "./layout/TransitionLayout";
import Image from "next/image";
import NavbarLayout from "./layout/NavbarLayout";


export default function Navbar() {

  return (
    <div className="fixed flex items-center justify-between h-16 w-full text-white z-[60] p-10">
      <h1 
      className="text-red-600 font-bold text-3xl"
      aria-label="Navegar a la seccion principal"
      >
        <TransitionLink
          href={'/'}
        >
          NEXTFlix
        </TransitionLink>
      </h1>

      <NavbarLayout>
        <ul className='flex flex-col text-center gap-10 transition duration-300 md:flex-row md:gap-5'>
          <li
            className="headerLink text-lg md:text-sm lg:text-lg md:font-light text-shadow"
            aria-label="Navegar a la sección de principal"
          >
            <TransitionLink
              href={'/'}
            >
              Home
            </TransitionLink>
          </li>
          <li
            className="headerLink text-lg md:text-sm lg:text-lg md:font-light text-shadow"
            aria-label='Navegar a la seccion de peliculas'
          >
            <TransitionLink
              href={'/movies'}
            >
              Peliculas
            </TransitionLink>
          </li>
          <li
            className="headerLink text-lg md:text-sm lg:text-lg md:font-light text-shadow"
            aria-label='Navegar a la seccion de series'
          >
            <TransitionLink
              href={'/tv-shows'}
            >
              TV Shows
            </TransitionLink>
          </li>
          <li
            className="headerLink text-lg md:text-sm lg:text-lg md:font-light text-shadow"
            aria-label='Navegar a la seccion de nuevo y popular'
          >
            <TransitionLink
              href={'/favorites'}
            >
              Favorites
            </TransitionLink>
          </li>
        </ul>
      </NavbarLayout>
      <div className="flex gap-5 justify-center items-center">
        <SearchInput />
        <div className="h-10 w-10">
          <Image
            src={profile.src}
            alt="profile"
            width={40}
            height={40}
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
