
export async function fetchTopRatedData(path: string, params:string) {
    
    const url = `https://api.themoviedb.org/3/${path}?language=en-US&page=1${params}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        // cache: 'force-cache' as RequestCache
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json()
        return result;
        
    } catch (error) {
        console.log(error);
    }
}

// export async function fetchMovieGenreListData() {
//     const movieGenres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=2a8e8430bbef22eac05ac10b009857ef&language=en`, {cache: 'force-cache' as RequestCache}).then((res) => res.json());
//     const seriesGenres = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=2a8e8430bbef22eac05ac10b009857ef&language=en`, {cache: 'force-cache' as RequestCache}).then((res) => res.json());
    
//     return [...movieGenres.genres, ...seriesGenres.genres];
//   }







