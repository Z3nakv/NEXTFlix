'use client';
import { useState } from 'react';
import { LazyRow } from '@/components/LazyRow';
import { movieProps, seasonsProps } from '@/types';

type SeasonSelectType = {
    result: movieProps;
    mediaId: string;
    mediaType: string;
};

export default function SeasonSelect({ result, mediaId, mediaType }: SeasonSelectType) {

    const seasons : seasonsProps[] = result?.seasons;
    
    const validSeasons = seasons?.filter((season) => season.name.toLowerCase() !== 'specials') || [];
    
    const [selectedSeason, setSelectedSeason] = useState(validSeasons[0]?.season_number || 1);

    const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const season = parseInt(event.target.value, 10);
        setSelectedSeason(season);
    };

    return (
        <div>
            <select
                name="seasons"
                id="selectSeason"
                className="selectOptions"
                value={selectedSeason}
                onChange={handleSeasonChange}
            >
                {validSeasons.map((season) => (
                    <option value={season.season_number} key={season.id}>
                        {season.name}
                    </option>
                ))}
            </select>

            {mediaType === 'tv' ? (
                <div className="md:ml-[-50px]">
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
