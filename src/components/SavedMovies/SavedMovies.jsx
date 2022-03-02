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
}) {
  const searchMovies = (value, isShortMovies) => {
    const searchedMovies = filterByQuery(savedMovies, value);
    const searchedMoviesbyDuration = filterByDuration(
      searchedMovies,
      isShortMovies
    );
    setSavedMovies(searchedMoviesbyDuration);
  };

  return (
    <div className="saved-movies">
      <Header />
      <SearchForm searchMovies={searchMovies} />
      <MoviesCardList
        isThisSavedMovies={true}
        movies={savedMovies}
        savedMovies={savedMovies}
        moviesIsLoading={savedMoviesIsLoading}
        onMovieCardButtonClick={onMovieCardButtonClick}
      />
      <Footer />
    </div>
  );
}

export default SavedMovies;
