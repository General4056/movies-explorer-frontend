import { MAIN_API_URL } from "../constants/constants";

function checkRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

export const register = (name, email, password) => {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password, email }),
  }).then((res) => checkRes(res));
};

export const authorize = (email, password) => {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => checkRes(res))
    .then((data) => {
      if (data.token) {
        console.log(data.token);
        localStorage.setItem("token", data.token);
        return data;
      }
    });
};

export const updateUser = (name, email) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ name, email }),
  }).then((res) => checkRes(res));
};

export const checkToken = (token) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkRes(res));
};

export const saveMovie = (movieData) => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(movieData),
  }).then((res) => checkRes(res));
};

export const deleteMovie = (movieid) => {
  return fetch(`${MAIN_API_URL}/movies/${movieid}`, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => checkRes(res));
};

export function getSavedMovies() {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => checkRes(res));
}
