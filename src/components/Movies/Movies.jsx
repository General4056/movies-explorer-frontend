import ErrorPopup from "../ErrorPopup/ErrorPopup";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  return (
    <div>
      <Header />
      <SearchForm />
      <MoviesCardList isThisSavedMovies={false} />
      <Footer />
      {/* <ErrorPopup /> */}
    </div>
  );
}

export default Movies;
