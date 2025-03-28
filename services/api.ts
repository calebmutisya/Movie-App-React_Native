
export const TMBD_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODRiNjNjMTJlYTc4ZTYzNWUxMTU1ZmMyNjQ2NWQxYiIsIm5iZiI6MTc0MzA3MTI2MC44OTY5OTk4LCJzdWIiOiI2N2U1MjgxYzVmM2UwYWMxODgwMDIzOTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nTIhgkKjXUBcLqxZy4KxSrli-9ygssljIe8o4pXRtbs",
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODRiNjNjMTJlYTc4ZTYzNWUxMTU1ZmMyNjQ2NWQxYiIsIm5iZiI6MTc0MzA3MTI2MC44OTY5OTk4LCJzdWIiOiI2N2U1MjgxYzVmM2UwYWMxODgwMDIzOTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nTIhgkKjXUBcLqxZy4KxSrli-9ygssljIe8o4pXRtbs`
    }
};

export const fetchMovies = async ({query}: {query: string}) => {

    const endpoint =  query? `${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :`${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint,{
        method: 'GET',
        headers: TMBD_CONFIG.headers
    });
    
    if (!response.ok) {
        // @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText);
    }
    const data = await response.json();

    return data.results;
}

