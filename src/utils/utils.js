import { SHORT_MOVIE_DURATION } from "../constants/constants";

export function filterByQuery(movies, query) {
  const searchedMovies = movies.filter((item) => {
    if (item.nameEN && item.nameRU) {
      return (
        item.nameEN.toLowerCase().includes(query) ||
        item.nameRU.toLowerCase().includes(query)
      );
    } else if (!item.nameEN && item.nameRU) {
      return item.nameRU.toLowerCase().includes(query);
    }
  });
  return searchedMovies;
}

export function filterByDuration(movies, isChecked) {
  const filterMovies = movies.filter((item) => {
    return item.duration <= SHORT_MOVIE_DURATION;
  });
  return isChecked ? filterMovies : movies;
}
