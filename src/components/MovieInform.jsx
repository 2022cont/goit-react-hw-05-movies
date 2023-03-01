import css from './MovieInform.module.css';

export default function MovieInform({ movie }) {

  const srcImg = `https://image.tmdb.org/t/p/w300` + movie.poster_path;
  return (
    <div className={css.movieInform}>

      <img src={srcImg} alt={movie.title || movie.name} />

      <div className={css.movieDiscription}>
        <h1>{movie.title || movie.name}</h1>

        <h2 className={css.titleName}>Overview</h2>
        <p className={css.discription}>{movie.overview ||
          <span>This is no review for this film </span>}</p>

        <h2 className={css.titleName}>Genres</h2>
        <ul className={css.genresList}>{genresList(movie.genres)}</ul>

      </div>
      

    </div>
  );
};

function genresList(genres) {
  return genres.map((genre, index) => (
    <li key={index} className={css.itemGenresList}>
      {genre.name}
    </li>
  ))
};

