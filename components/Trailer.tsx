'use client';
import { usebackgroundIndex } from '@/store';
import { fetchTopRatedData } from '@/utils/fecthData';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Trailer() {
    const openTrailerModal = usebackgroundIndex((state) => state.openTrailerModal);
    const setOpenTrailerModal = usebackgroundIndex((state) => state.setOpenTrailerModal);
    const params = useParams();

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
                const trailerData = response?.results?.find(video => video.type === 'Trailer');
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
      setOpenTrailerModal(false);
    }

    return (
        <div 
        className='fixed h-screen grid place-content-center w-full z-50 inset-0 bg-black bg-opacity-40'
        onClick={handleCloseModal}
        >
            <div 
            className='w-[calc(90vw-2rem)] max-w-[1000px]'
            onClick={e => e.stopPropagation()}
            >
                {videoUrl ? (
                    <iframe
                        src={videoUrl}
                        className='w-full h-[500px]'
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="Trailer"
                    ></iframe>
                ) : (
                    <p className="text-white text-center">Cargando tráiler...</p>
                )}
            </div>
        </div>
    );
}
