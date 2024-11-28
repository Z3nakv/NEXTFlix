'use client';
import { useState } from 'react';
import { LazyRow } from './LazyRow';
import { movieProps, seasonsProps } from '@/types';

type SeasonSelectType = {
    result: movieProps;
    mediaId: string;
    mediaType: string;
};

export default function SeasonSelect({ result, mediaId, mediaType }: SeasonSelectType) {
    // Filtrar temporadas válidas, excluyendo "Specials"
    const seasons : seasonsProps[] = result?.seasons;
    
    const validSeasons = seasons?.filter((season) => season.name.toLowerCase() !== 'specials') || [];
    
    // Estado para la temporada seleccionada, comenzando con la primera temporada válida
    const [selectedSeason, setSelectedSeason] = useState(validSeasons[0]?.season_number || 1);

    const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const season = parseInt(event.target.value, 10); // Convertir el valor a número
        setSelectedSeason(season); // Actualizar el estado de la temporada seleccionada
    };

    return (
        <div>
            <select
                name="seasons"
                id="selectSeason"
                className="selectOptions"
                value={selectedSeason} // Sincronizar el valor del select con el estado
                onChange={handleSeasonChange} // Manejar el cambio de temporada
            >
                {validSeasons.map((season) => (
                    <option value={season.season_number} key={season.id}>
                        {season.name}
                    </option>
                ))}
            </select>

            {mediaType === 'tv' ? (
                <div className="md:ml-[-50px]">
                    {/* LazyRow carga dinámicamente la temporada seleccionada */}
                    <LazyRow
                        key={selectedSeason}
                        title={''}
                        path={`${mediaType}/${mediaId}/season/${selectedSeason}`}
                        params={''}
                    />
                </div>
            ) : null}
        </div>
    );
}
