'use client'
import { usebackgroundIndex } from '@/store'
import { FaTrailer } from 'react-icons/fa'

export default function OpenTrailerButton() {
    const setOpenTrailerModal = usebackgroundIndex(state => state.setOpenTrailerModal);
    return (
        <button
            className="bg-gray-700 opacity-100 text-sm md:text-lg font-bold px-6 py-3 rounded-md transition duration-500 hover:bg-opacity-40"
            onClick={() => setOpenTrailerModal(true)}
        >
            <FaTrailer
                className="inline-block mr-2"
                
            /> Show Trailer
        </button>
    )
}
