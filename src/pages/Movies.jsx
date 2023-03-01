import { useEffect, useState } from 'react';

import { MoviesSearch } from '../components/MoviesSearch';
import * as API from '../components/server/MoviesFetchAPI';
import { MoviesList } from 'components/MoviesList';
import { Outlet, useSearchParams} from 'react-router-dom';

export const Movies = () => {
    
    const [moviData, setMovieData] = useState([]);
    const [error, setError] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams === '') {
            return ;
        }

        API.movieSearchFetch(searchParams)
            .then(data => {
                if (data.results.length === 0) {
                    setError(
                        'Sorry, there are no movies matching your search query. Please try again.'
                    );
                    return;
                } else {
                    setMovieData(data.results);
                }
            })
            .catch(error => {
                setError(error);
            });
    }, [searchParams]);

    const formHandelSubmit = data => {
        setSearchParams(data !== '' ?  data : {});
    };
    
    console.log('error', error);
    return (
        <main>
            <MoviesSearch onSubmit={formHandelSubmit} movieSearch={moviData} />
            {(moviData.length !== 0) && <MoviesList movies={moviData} />}
            <Outlet />

        </main>
    );
};

