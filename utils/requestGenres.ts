import { genresProps } from "@/types";

type fetchGenresProps = {
    genreIds: number[];
    genres: genresProps[];
  };
  
  export function spanGenres({ genreIds, genres }: fetchGenresProps): string[] {
    const genresConvertedList : string[] = [];
	genreIds
		.slice(0, 3)
		.map(genreId =>
			genres
				.filter(el => el.id === genreId)
				.map(el => genresConvertedList.push(el.name))
		);

	return genresConvertedList;
  }