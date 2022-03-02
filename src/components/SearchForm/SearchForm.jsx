import { useState } from "react";
import { useInput } from "../../utils/hooks/useInput";
import "./SearchForm.css";

function SearchForm({ searchMovies, moviesIsLoading }) {
  const [checked, setChecked] = useState(false);

  const searchInput = useInput("", { isSearch: true });

  function search(e) {
    console.log(moviesIsLoading);
    e.preventDefault();
    searchMovies(searchInput.value, checked);
  }

  function checkboxClick() {
    setChecked(!checked);
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__label">
          <input
            value={searchInput.value}
            onChange={searchInput.onChange}
            onBlur={searchInput.onBlur}
            type="text"
            className="search__input"
            placeholder="Фильм"
            required
          />
          <button
            className="search__button"
            onClick={search}
            disabled={!searchInput.inputValid || moviesIsLoading}
          ></button>
          <span className="search__error">
            {searchInput.isVisited &&
              !searchInput.inputValid &&
              searchInput.errorMessage}
          </span>
        </form>
        <div className="switch-container">
          <span className="switch-container__text">Короткометражки</span>
          <label className="switch">
            <input
              className="switch__input"
              type="checkbox"
              onChange={checkboxClick}
            />
            <span className="switch__slider"></span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
