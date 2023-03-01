import { Link, generatePath } from "react-router-dom";
import { MoviesName } from './MoviesList.styled';

import { ROUTERS_PATH } from './routerApp/_routers';

export const MoviesList = ({ movies }) => {

    return (
        movies.map((movie) => (

                <Link key={movie.id} to={generatePath(ROUTERS_PATH.id, { id: movie.id })} >
                    <MoviesName>{movie.title || movie.name}</MoviesName>
                </Link>

        ))

    )
};

