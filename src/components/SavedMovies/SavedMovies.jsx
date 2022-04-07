import { useEffect, useState } from "react";
import { filterByDuration, filterByQuery } from "../../utils/utils";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({
  savedMovies,
  setSavedMovies,
  onMovieCardButtonClick,
  savedMoviesIsLoading,
  loggedIn,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [renderedMovies, setRenderedMovies] = useState([]);
  useEffect(() => {
    setRenderedMovies(savedMovies);
  }, [savedMovies]);

  const searchMovies = (value, isShortMovies) => {
    const searchedMovies = filterByQuery(savedMovies, value);
    const searchedMoviesByDuration = filterByDuration(
      searchedMovies,
      isShortMovies
    );
    setRenderedMovies(searchedMoviesByDuration);
  };

  return (
    <div className="saved-movies">
      <Header loggedIn={loggedIn} isThisMain={false} />
      <SearchForm
        isThisSavedMovies={true}
        searchMovies={searchMovies}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <MoviesCardList
        isThisSavedMovies={true}
        movies={renderedMovies}
        savedMovies={savedMovies}
        moviesIsLoading={savedMoviesIsLoading}
        onMovieCardButtonClick={onMovieCardButtonClick}
      />
      <Footer />
    </div>
  );
}

export default SavedMovies;
