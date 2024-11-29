'use client';
import { usebackgroundIndex } from '@/store';
import { fetchTopRatedData } from '@/utils/fecthData';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { FaExternalLinkAlt } from "react-icons/fa";

type videoProps = {
    type: string
    key: string
}

export default function Trailer() {
    const openTrailerModal = usebackgroundIndex((state) => state.openTrailerModal);
    const setOpenTrailerModal = usebackgroundIndex((state) => state.setOpenTrailerModal);
    const params = useParams();
    const [miniReproductor, setMiniReproductor] = useState(false);

    const id = params?.id;
    let mediaId, mediaType;

    if (typeof id === 'string') {
        [mediaId, mediaType] = id.split('-');
    } else {
        // console.log("El parámetro 'id' no es válido:", id);
    }

    const mediaUrl = mediaId && mediaType ? `${mediaType}/${mediaId}/videos` : '';
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        if (!mediaUrl) return;

        async function requestTrailer() {
            try {
                const response = await fetchTopRatedData(mediaUrl, '');
                const videoData : videoProps[] = response?.results; 
                const trailerData = videoData.find(video => video.type === 'Trailer');
                if (trailerData) {
                    setVideoUrl(`https://www.youtube.com/embed/${trailerData.key}`);
                } else {
                    console.log("No se encontró un tráiler para este medio.");
                }
            } catch (error) {
                console.log("Error al obtener los datos del tráiler:", error);
            }
        }

        requestTrailer();
    }, [mediaUrl]);

    if (!openTrailerModal) return null;

    const handleCloseModal = () => {
        setMiniReproductor(false);
        setOpenTrailerModal(false)
    }

    return (
        <div
            className={`fixed  grid place-content-center w-full z-[100] inset-0 bg-black bg-opacity-40  ${miniReproductor ? 'h-0' : 'h-screen'} group`}
            onClick={() => setMiniReproductor(true)}
        >
            <div
    className={`fixed bg-black rounded overflow-hidden transition-all duration-700 ease-in-out 
        ${miniReproductor
            ? 'w-[245px] h-[145px] bottom-4 right-4 translate-x-0 translate-y-0'
            : 'w-[calc(90vw-2rem)] max-w-[1000px] h-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'}`}
    onClick={e => e.stopPropagation()}
>
    {miniReproductor && (
        <div
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            onClick={() => setMiniReproductor(false)}
        >
            <FaExternalLinkAlt />
        </div>
    )}
    {
        miniReproductor && (
            <div 
            className='absolute top-1 right-2 text-2xl text-gray-400 font-bold opacity-0 transition-opacity duration-300 cursor-pointer group-hover:opacity-100'
            onClick={handleCloseModal}
            >
                x
            </div>
        )
    }
    {videoUrl ? (
        <ReactPlayer
            url={videoUrl}
            controls={true}
            width="100%"
            height="100%"
            playing={true}
        />
    ) : (
        <p className="text-white text-center">Cargando tráiler...</p>
    )}
</div>
        </div>
    );
}
