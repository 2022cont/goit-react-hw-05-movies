import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '555c663a1e135ff952778c19b3495867';


export async function getMoviesFetch() {
    const getMoviesFetch = await axios.get(`/trending/all/day?api_key=${API_KEY}`)
        .then(response => response.data.results)
        .catch(err => {
            console.error(err);
        });
    return (getMoviesFetch);
};


export async function moviesFetchId({ id }) {
    const response = await axios(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return (response.data);
};

export async function loaderCastFetchId(idCast) {

    const response = await axios(`/movie/${idCast}/credits?api_key=${API_KEY}&language=en-US`);
    return (response.data.cast);
};

export async function loaderReviewsFetchId(idCast) {
    const response = await axios(`/movie/${idCast}/reviews?api_key=${API_KEY}&language=en-US`);
    return (response.data.results);
};

export async function movieSearchFetch( moviesSearch) {
    const response = await axios(`/search/movie?api_key=${API_KEY}&query=${moviesSearch}&language=en-US`);
    return (response.data);
};