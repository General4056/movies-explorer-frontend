import { MOVIE_API_URL } from "../constants/constants";

export function checkRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Произошла ошибка: ${res.status}:${res.statusText}`);
}

export function getFilms() {
  return fetch(MOVIE_API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkRes(res));
}
