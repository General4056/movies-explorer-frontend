import { useEffect, useState } from "react";
import { getFilms } from "../../utils/MoviesApi";
import { filterByDuration, filterByQuery } from "../../utils/utils";
import { SERVER_ERROR_MESSAGE } from "../../constants/constants";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies({ savedMovies, onMovieCardButtonClick, loggedIn }) {
  const [movies, setMovies] = useState([]);
  const [moviesIsLoading, setMoviesIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const localMovies = localStorage.getItem("movies");
    const localCheckboxState = localStorage.getItem("isShort");
    if (localMovies) {
      setMovies(JSON.parse(localMovies));
      localCheckboxState === "true" ? setIsChecked(true) : setIsChecked(false);
    }
  }, []);

  const searchMovies = (value) => {
    setMoviesIsLoading(true);
    setTimeout(() => {
      getFilms()
        .then((movies) => {
          const searchedMoviesByQuery = filterByQuery(movies, value);
          const searchedMoviesbyDuration = filterByDuration(
            searchedMoviesByQuery,
            isChecked
          );
          const moviesToSave = searchedMoviesbyDuration.map((movie) => {
            return {
              country: movie.country || "not found",
              description: movie.description,
              director: movie.director,
              duration: movie.duration,
              nameEN: movie.nameEN || "not found",
              nameRU: movie.nameRU,
              trailerLink: movie.trailerLink,
              year: movie.year,
              image: `https://api.nomoreparties.co${movie.image.url}`,
              thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
              movieId: movie.id,
            };
          });
          if (moviesToSave.length === 0) {
            setMovies([]);
            setLoadingMessage("Ничего не найдено");
          } else {
            setLoadingMessage("");
            console.log(moviesToSave);
            setMovies(moviesToSave);
          }
          localStorage.setItem("movies", JSON.stringify(moviesToSave));
          localStorage.setItem("query", JSON.stringify(value));
          localStorage.setItem("isShort", isChecked);
        })
        .catch((err) => {
          console.log(err.message);
          setErrorMessage(`${SERVER_ERROR_MESSAGE}: ${err.message}`);
        })
        .finally(() => setMoviesIsLoading(false));
    }, 1000);
  };

  return (
    <>
      <Header loggedIn={loggedIn} isThisMain={false} />
      <SearchForm
        isThisSavedMovies={false}
        searchMovies={searchMovies}
        moviesIsLoading={moviesIsLoading}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <MoviesCardList
        moviesIsLoading={moviesIsLoading}
        loadingMessage={loadingMessage}
        movies={movies}
        savedMovies={savedMovies}
        onMovieCardButtonClick={onMovieCardButtonClick}
      />
      <Footer />
      <ErrorPopup
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </>
  );
}

export default Movies;
