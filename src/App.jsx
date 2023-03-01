import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ROUTERS_PATH } from "./components/routerApp/_routers";

import RootLayout from "./components/routerApp/RootLayout";

import Home from './pages/Home';
import { Movies } from 'pages/Movies';
import MovieDetails from './pages/MovieDetails';
import ErrorPage from './pages/ErrorPage';


import { CastCard } from './components/CastCard';
import { ReviewsCard } from './components/ReviewsCard';

import { loaderMoviesFetch } from './pages/Home';

import { loaderMoviesFetchId } from './pages/MovieDetails';
import { loaderCastMoviesId } from './pages/MovieDetails';
import { loaderReviewsMoviesId } from './pages/MovieDetails';
import { MoviesList } from 'components/MoviesList';

export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path={ROUTERS_PATH.index_path}
                element={<RootLayout path={ROUTERS_PATH.index_path} end />}
                errorElement={<ErrorPage />}
            >

                <Route
                    index
                    loader={loaderMoviesFetch}
                    element={<Home />} />

                <Route
                    path={ROUTERS_PATH.movie_path}
                    element={<Movies />}

                >
                    <Route
                        path={ROUTERS_PATH.search_path}
                        element={<MoviesList />}
                    />
                </Route>


                <Route
                    path={ROUTERS_PATH.id}
                    loader={loaderMoviesFetchId}
                    element={<MovieDetails />}
                >
                    <Route
                        path={ROUTERS_PATH.cast_path}
                        loader={loaderCastMoviesId}
                        element={<CastCard />}

                    />

                    <Route
                        path={ROUTERS_PATH.reviews_path}
                        loader={loaderReviewsMoviesId}
                        element={<ReviewsCard />}
                    />
                </Route>

            </Route>), { basename: "/goit-react-hw-05-movies" })
    return (
        <RouterProvider router={router} />
    );
}