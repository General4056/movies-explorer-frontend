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

function Movies({ savedMovies, onMovieCardButtonClick }) {
  const [movies, setMovies] = useState([]);
  const [moviesIsLoading, setMoviesIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const localMovies = localStorage.getItem("movies");
    if (localMovies) {
      setMovies(JSON.parse(localMovies));
    }
  }, []);

  const searchMovies = (value, isShortMovies) => {
    setMoviesIsLoading(true);
    setTimeout(() => {
      getFilms()
        .then((movies) => {
          const searchedMoviesByQuery = filterByQuery(movies, value);
          const searchedMoviesbyDuration = filterByDuration(
            searchedMoviesByQuery,
            isShortMovies
          );
          const moviesToSave = searchedMoviesbyDuration.map((movie) => {
            return {
              country: movie.country,
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
            localStorage.setItem("movies", JSON.stringify(moviesToSave));
            console.log(moviesToSave);
            setMovies(moviesToSave);
          }
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
      <Header />
      <SearchForm
        searchMovies={searchMovies}
        moviesIsLoading={moviesIsLoading}
      />
      <MoviesCardList
        moviesIsLoading={moviesIsLoading}
        loadingMessage={loadingMessage}
        isThisSavedMovies={false}
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
