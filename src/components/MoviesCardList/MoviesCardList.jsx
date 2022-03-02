import { useEffect, useState } from "react";
import { useWindowWidth } from "../../utils/hooks/useWindowWidth";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

function MoviesCardList({
  movies,
  isThisSavedMovies,
  moviesIsLoading,
  savedMovies,
  onMovieCardButtonClick,
  loadingMessage,
}) {
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [restMovies, setRestMovies] = useState([]);
  const [movieLimit, setMovieLimit] = useState(0);
  const [increaser, setIncreaser] = useState(0);
  const width = useWindowWidth();
  useEffect(() => {
    if (movies.length === 0) {
      setRenderedMovies([]);
      setRestMovies([]);
    }
    let initMovies = [];
    let othMovies = [];
    if (width >= 1134) {
      initMovies = movies.slice(0, 3);
      othMovies = movies.slice(3);
      setMovieLimit(12);
      setIncreaser(3);
    } else if (width < 1134 && width > 636) {
      initMovies = movies.slice(0, 2);
      othMovies = movies.slice(2);
      setMovieLimit(8);
      setIncreaser(2);
    } else {
      initMovies = movies.slice(0, 1);
      othMovies = movies.slice(2);
      setMovieLimit(5);
      setIncreaser(2);
    }
    setRestMovies(othMovies);
    initMovies = isThisSavedMovies ? movies : initMovies;
    setRenderedMovies(initMovies);
  }, [movies, width]);

  function onButtonIncrementClick() {
    setRenderedMovies([...renderedMovies, ...restMovies.slice(0, increaser)]);
    setRestMovies(restMovies.slice(increaser));
  }
  return (
    <section className="movies">
      {moviesIsLoading ? (
        <>
          <Preloader />
        </>
      ) : !!loadingMessage ? (
        <span className="movies__span">{loadingMessage}</span>
      ) : (
        renderedMovies && (
          <ul className="movies-list">
            {renderedMovies.map((movie) => {
              return (
                <MoviesCard
                  key={movie.movieId}
                  isThisSavedMovies={isThisSavedMovies}
                  movie={movie}
                  savedMovies={savedMovies}
                  onMovieCardButtonClick={onMovieCardButtonClick}
                />
              );
            })}
          </ul>
        )
      )}
      {!isThisSavedMovies &&
        renderedMovies.length !== movieLimit &&
        movies.length > movieLimit && (
          <button className="movies__button" onClick={onButtonIncrementClick}>
            Ещё
          </button>
        )}
    </section>
  );
}

export default MoviesCardList;
