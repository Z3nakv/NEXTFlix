import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed flex items-center justify-between h-16 w-full text-white z-[60] p-10">
        <h1 className="text-red-600 font-bold text-3xl">
          <Link
            href={'/'}
            aria-label="Navegar a la seccion principal"
          >
            NEXTFlix
          </Link>
        </h1>
        <ul className='md:flex gap-5 hidden'> 
            <li className="headerLink">
              <Link
              href={'/'} 
              aria-label="Navegar a la sección de principal">
                Home
              </Link>
            </li>
            <li className="headerLink">
              <Link
              href={'/movies'}
              aria-label='Navegar a la seccion de peliculas'
              >
                Peliculas
              </Link>
            </li>
            <li className="headerLink">
              <Link
              href={'/tv-shows'}
              aria-label='Navegar a la seccion de series'
              >
                TV Shows
              </Link>
            </li>
            <li className="headerLink">
              <Link
              href={'/new-and-popular'}
              aria-label='Navegar a la seccion de nuevo y popular'
              >
                New & Popular
              </Link>
            </li>
            <li className="headerLink">
              <Link
              href={'/genres'}
              aria-label='Navegar a la seccion de Generos'
              >
                Generos
              </Link>
            </li>

        </ul>
        <div>perfil</div>
    </div>
  )
}
