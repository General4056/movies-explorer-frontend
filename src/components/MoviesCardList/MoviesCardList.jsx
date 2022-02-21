import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ isThisSavedMovies }) {
  return (
    <section className="movies">
      <ul className="movies-list">
        <MoviesCard isThisSavedMovies={isThisSavedMovies} />
        <MoviesCard isThisSavedMovies={isThisSavedMovies} />
        <MoviesCard isThisSavedMovies={isThisSavedMovies} />
        <MoviesCard isThisSavedMovies={isThisSavedMovies} />
        <MoviesCard isThisSavedMovies={isThisSavedMovies} />
        <MoviesCard isThisSavedMovies={isThisSavedMovies} />
      </ul>
      {!isThisSavedMovies && <button className="movies__button">Ещё</button>}
    </section>
  );
}

export default MoviesCardList;
