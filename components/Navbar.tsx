
export default function Navbar() {
  return (
    <div className="fixed flex items-center justify-between h-16 w-full text-white z-10 p-10">
        <h1 className="text-red-600 font-bold text-3xl">NEXTFlix</h1>
        <ul className='md:flex gap-5 hidden'> 
            <li className="headerLink">Home</li>
            <li className="headerLink">Peliculas</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
        <div>perfil</div>
    </div>
  )
}
