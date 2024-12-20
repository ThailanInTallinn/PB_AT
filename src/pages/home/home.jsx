import Header from "../../components/header/header";
import Card from "../../components/card/card";
import styles from "./home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "../../context";

export const MY_ACESS_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTcyOTAxMDMxNi4xMTk0MTUsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksUKOcK-sBVNzC3lR54wAzewqEpyheexkftNYlxB9og";

const popularMovies = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    authorization: MY_ACESS_TOKEN,
  },
};

const upcoming = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTcyOTAxMDMxNi4xMTk0MTUsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksUKOcK-sBVNzC3lR54wAzewqEpyheexkftNYlxB9og",
  },
};

const topRated = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTcyOTAxMDMxNi4xMTk0MTUsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksUKOcK-sBVNzC3lR54wAzewqEpyheexkftNYlxB9og",
  },
};

export default function Home() {
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const { category, setCategory, searchTerm, resultsList, setResultsList } =
    useAppContext();

  async function getPopularMovies() {
    await axios.request(popularMovies).then(function (response) {
      setPopularMoviesList(response.data.results);
    });
  }

  async function getUpcoming() {
    await axios.request(upcoming).then(function (response) {
      setUpcomingList(response.data.results);
    });
  }

  async function getTopRated() {
    await axios.request(topRated).then(function (response) {
      setTopRatedList(response.data.results);
    });
  }

  useEffect(() => {
    getPopularMovies();
    getUpcoming();
    getTopRated();
  }, []);

  return !searchTerm > 0 ? (
    <div className={styles.homeContainer}>
      <Header category={category} setCategory={setCategory} />
      <div className={styles.bodyContainer}>
        <div className={styles.categoryContainer}>
          <h2 className={styles.header}>Filmes populares</h2>
          <ul className={styles.listContainer}>
            {popularMoviesList.map((item, index) => {
              return (
                <li key={index}>
                  <Card
                    id={item.id}
                    movieImg={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2 className={styles.header}>Próximos lançamentos</h2>
          <ul className={styles.listContainer}>
            {upcomingList.map((item, index) => {
              return (
                <li key={index}>
                  <Card
                    id={item.id}
                    movieImg={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2
            className={styles.header}
            onClick={() => {
              console.log(topRatedList[0]);
            }}
          >
            Filmes aclamados pela crítica
          </h2>
          <ul className={styles.listContainer}>
            {topRatedList.map((item, index) => {
              return (
                <li key={index}>
                  <Card
                    id={item.id}
                    movieImg={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.homeContainer}>
      <Header category={category} setCategory={setCategory} />
      <div className={styles.bodyContainer}>
        <div className={styles.categoryContainer}>
          <h2
            className={styles.header}
            onClick={() => {
              console.log(topRatedList[0]);
            }}
          >
            Resultados da busca
          </h2>
          <ul className={styles.listContainer}>
            {resultsList ? (
              resultsList.map((item, index) => {
                return (
                  <li key={index}>
                    <Card
                      id={item.id}
                      movieImg={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    />
                  </li>
                );
              })
            ) : (
              <h2>Não há resultados para a sua busca :(</h2>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
