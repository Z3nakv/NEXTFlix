import React, { useMemo } from "react";
import { spanGenres } from "@/utils/requestGenres";
import { genres } from "@/data";

const Genres = React.memo(function Genres({ genreIds, isPoster }: { genreIds: number[]; isPoster: boolean }) {
  
  const genresString  = useMemo(() => spanGenres({ genreIds, genres }), [genreIds]);
  
  const genresNumber = isPoster ? 2 : 3;

  return (
    <ul className={`flex justify-center items-center w-fit gap-2 text-[11px]`}>
      {genresString &&
        genresString.slice(0, genresNumber).map((item, index) => (
          <li key={index} className="flex items-center justify-center gap-1">
            <span>•</span>
            <span className={`${!isPoster && genresString.length > 2 ? 'sm:text-[8px]' : ''}`}>{item}</span>
          </li>
        ))}
    </ul>
  );
})

export default Genres;
