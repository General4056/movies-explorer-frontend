import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import {
  SOMETHING_WENT_WRONG_ERROR_MESSAGE,
  WRONG_DATA_ERROR_MESSAGE,
  WRONG_EMAIL_ERROR_MESSAGE,
} from "../../constants/constants";
import {
  authorize,
  checkToken,
  deleteMovie,
  getSavedMovies,
  register,
  saveMovie,
  updateUser,
} from "../../utils/MainApi";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");

  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesIsLoading, setSavedMoviesIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [updateUserMessage, setUpdateUserMessage] = useState("");

  const [isRequestSending, setIsRequestSending] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token)
        .then((userData) => {
          setLoggedIn(true);
          setCurrentUser(userData);
          if (path === "/signin" || path === "/signup") {
            navigate("/");
          } else {
            navigate(path);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    setSavedMoviesIsLoading(true);
    getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setSavedMoviesIsLoading(false);
      });
  }, []);

  function handleLogin(email, password) {
    if (!email || !password) {
      return;
    }
    setIsRequestSending(true);
    authorize(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          setLoginError(WRONG_EMAIL_ERROR_MESSAGE);
        } else if (err.status === 400) {
          setLoginError(WRONG_DATA_ERROR_MESSAGE);
        } else {
          setLoginError(`${SOMETHING_WENT_WRONG_ERROR_MESSAGE} ${err.status}`);
        }
      })
      .finally(() => setIsRequestSending(false));
  }

  function handleRegister(name, email, password) {
    if (!email || !password || !name) {
      return;
    }
    setIsRequestSending(true);
    register(name, email, password)
      .then((data) => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 409) {
          setRegisterError("Такой email уже существует");
        }
        if (err.status === 400) {
          setRegisterError("Введены невалидные данные");
        } else {
          setRegisterError(`Что-то пошло не так... Ошибка ${err.status}`);
        }
      })
      .finally(() => setIsRequestSending(false));
  }

  function saveMovieHandler(movie) {
    saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
      })
      .catch((err) => console.log(err));
  }

  function deleteMovieHandler(movie) {
    const idToDelite = savedMovies.find(
      (data) => data.movieId === movie.movieId
    )._id;
    deleteMovie(idToDelite)
      .then((newMovie) => {
        const newMovies = savedMovies.filter(
          (movie) => movie.movieId !== newMovie.movieId
        );
        setSavedMovies(newMovies);
      })
      .catch((err) => console.log(err));
  }

  function onMovieCardButtonClick(movie, isSaved) {
    !isSaved ? saveMovieHandler(movie) : deleteMovieHandler(movie);
  }

  function onEditProfile(name, email) {
    setIsRequestSending(true);
    updateUser(name, email)
      .then(({ name, email }) => {
        setCurrentUser({ name, email });
        setUpdateUserMessage("изменение профиля прошло успешно");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsRequestSending(false));
  }

  function handleExit() {
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("movies");
    localStorage.removeItem("query");
    localStorage.removeItem("isShort");
    navigate("/");
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={
                    <Movies
                      loggedIn={loggedIn}
                      setCurrentUser={setCurrentUser}
                      savedMovies={savedMovies}
                      onMovieCardButtonClick={onMovieCardButtonClick}
                    />
                  }
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={
                    <SavedMovies
                      loggedIn={loggedIn}
                      savedMovies={savedMovies}
                      savedMoviesIsLoading={savedMoviesIsLoading}
                      setSavedMovies={setSavedMovies}
                      onMovieCardButtonClick={onMovieCardButtonClick}
                    />
                  }
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={
                    <Profile
                      loggedIn={loggedIn}
                      isRequestSending={isRequestSending}
                      currentUser={currentUser}
                      onEditProfile={onEditProfile}
                      updateUserMessage={updateUserMessage}
                      handleExit={handleExit}
                    />
                  }
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  loggedIn={loggedIn}
                  isRequestSending={isRequestSending}
                  handleRegister={handleRegister}
                  registerError={registerError}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  loggedIn={loggedIn}
                  handleLogin={handleLogin}
                  loginError={loginError}
                  isRequestSending={isRequestSending}
                />
              }
            />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <ErrorPopup
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
