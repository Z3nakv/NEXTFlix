
export async function fetchPopularNowData() {

    // const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US'
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&limit=7'
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
        return result.results;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchTopData() {

    // const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US'
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
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
        return result.results;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchTopRatedData(path: string, params:string) {
    
    const url = `https://api.themoviedb.org/3/${path}?language=en-US&page=1${params}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json()
        return result.results;
        
    } catch (error) {
        console.log(error);
    }
}

export async function fetchMovieGenreListData(path:string) {
    
    const url = `https://api.themoviedb.org/3/${path}?language=en`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:  `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        cache: 'force-cache' as RequestCache
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.genres
    } catch (error) {
        console.log(error);
    }
}







