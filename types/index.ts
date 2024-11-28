export type movieProps = {
    backdrop_path: string
    id: number
    original_title: string
    overview: string
    poster_path: string
    release_date?: string
    title: string
    original_name?: string
    genre_ids: number[]
    media_type: string
    vote_average: number
    original_language: string
    adult: boolean
    name:string
    runtime?:number
    still_path: string
    episode_number?: string
    first_air_date?: string
    seasons: object[]
    air_date?: string
    genres: genresProps[]
}

export type popularProps =  {
    adult: false,
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    known_for: movieProps[]
}

export type genresProps = {
    id: number
    name: string
}