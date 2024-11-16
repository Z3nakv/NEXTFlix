export type movieProps = {
    backdrop_path: string
    id: string
    original_title: string
    overview: string
    poster_path: string
    release_date: string
    title: string
    original_name?: string
    genre_ids: number[]
    media_type: string
    vote_average: number
    original_language: string
    adult: boolean
}

export type genresProps = {
    id: number
    name: string
}