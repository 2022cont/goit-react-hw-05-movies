import { Outlet, useLoaderData, useParams, generatePath, Link, useNavigate } from "react-router-dom";
import { ROUTERS_PATH } from '../components/routerApp/_routers';

import { moviesFetchId, loaderCastFetchId, loaderReviewsFetchId } from '../components/server/MoviesFetchAPI';

import MovieInform from "components/MovieInform";

import css from './MovieDetails.module.css';


export default function MovieDetails() {
  const id = useParams();
  const loaderData = useLoaderData();
  const navigate = useNavigate();
  const handleButtonBackOnClick = () => {
    navigate(ROUTERS_PATH.index_path);
  }

  return (
    <>
      <button type="button" onClick={handleButtonBackOnClick} className={css.buttonBack}>Go Back </button>

        <MovieInform movie={loaderData} />

        <h2 className={css.titleName}>Additional information</h2>

        <div>
          <Link to={generatePath(ROUTERS_PATH.cast_path, { id: id.id })} className={css.additionalLink}>Cast</Link>
          <Link to={generatePath(ROUTERS_PATH.reviews_path, { id: id.id })} className={css.additionalLink}>Reviews</Link>
        </div>

      <Outlet />
    </>
  );
};

export function loaderMoviesFetchId({ params }) {
  return moviesFetchId(params);
};

export function loaderCastMoviesId({ params }) {
  return loaderCastFetchId(params.id)
}

export function loaderReviewsMoviesId({ params }) {
  return loaderReviewsFetchId(params.id)
}
