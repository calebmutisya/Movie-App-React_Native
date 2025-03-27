export const TMBD_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.TMDB_API_KEY,
    headers:{
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    }
}

export const fetchMovies = async ({query}: {query: string}) => {

    const endpoint =  query? `${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :`${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint,{
        method: 'GET',
        headers: TMBD_CONFIG.headers
    });
    
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }
    const data = await response.json();

    return data.results;
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
