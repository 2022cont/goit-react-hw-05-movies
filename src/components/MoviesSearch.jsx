import { useState } from 'react';

import IconButton from 'components/iconbutton/IconButton';
import { ImSearch } from 'react-icons/im';

export const MoviesSearch = ({onSubmit}) => {
    const [moviesSearch, setMoviesSearch] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        if (moviesSearch.trim() === '') {
            alert('Please, enter text in the search bar ');
            return
        };
        onSubmit(moviesSearch);
        reset();
    };

    const handleInput = event => {
        setMoviesSearch(event.currentTarget.value.toLowerCase());
    };

    const reset = () => {
        setMoviesSearch('');
    };

    return (
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder={moviesSearch ? moviesSearch : 'Search movies'}

                    value={moviesSearch}
                onChange={handleInput}
                
                style={{width: '600px'}}
                />

                <IconButton aria-label='Icon Search' type='submit'>
                    <ImSearch style={{ size: '20px', color: "blue", verticalAlign: 'middle' }} />
                </IconButton>
            </form>
    )
}
