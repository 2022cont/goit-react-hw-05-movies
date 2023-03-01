import { useLoaderData } from "react-router-dom";

import { MoviesList } from "../components/MoviesList";

import { getMoviesFetch } from '../components/server/MoviesFetchAPI';

export default function Home() {
    const loaderData = useLoaderData();

    return (
        <>
            <h1>Trending to day </h1>
            <MoviesList movies={loaderData} />
        </>

    )
};

export const loaderMoviesFetch = ()=> {
    return getMoviesFetch()
        .then(data => {
        return data
    });
}

