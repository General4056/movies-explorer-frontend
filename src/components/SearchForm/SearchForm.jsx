import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__label">
          <input
            type="text"
            className="search__input"
            placeholder="Фильм"
            required
          />
          <button className="search__button"></button>
        </form>
        <div className="switch-container">
          <span className="switch-container__text">Короткометражки</span>
          <label className="switch">
            <input type="checkbox" className="switch__input" />
            <span className="switch__slider"></span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
