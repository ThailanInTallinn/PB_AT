import Header from "../../components/header/header";
import SeriesCard from "../../components/seriesCard/seriescard";
import styles from "./series.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "../../context";

export const MY_ACESS_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTcyOTAxMDMxNi4xMTk0MTUsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksUKOcK-sBVNzC3lR54wAzewqEpyheexkftNYlxB9og";

const popularSeries = {
  method: "GET",
  url: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTczMjUyOTMyMi42NDIzNTEsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ABgAh2WXlIkArGQwAKX8L26J50GTKmW8S0wK4vKmrM",
  },
};

const topRated = {
  method: "GET",
  url: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTczMjUyOTMyMi42NDIzNTEsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ABgAh2WXlIkArGQwAKX8L26J50GTKmW8S0wK4vKmrM",
  },
};

const onTheAir = {
  method: "GET",
  url: "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=2",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTczMjUyOTMyMi42NDIzNTEsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ABgAh2WXlIkArGQwAKX8L26J50GTKmW8S0wK4vKmrM",
  },
};

export default function Series() {
  const [popularSeriesList, setPopularSeriesList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [onTheAirList, setOnTheAirList] = useState([]);
  const { category, setCategory } = useAppContext();

  async function getPopularSeries() {
    await axios.request(popularSeries).then(function (response) {
      setPopularSeriesList(response.data.results);
    });
  }

  async function getTopRatedSeries() {
    await axios.request(topRated).then(function (response) {
      setTopRatedList(response.data.results);
    });
  }

  async function getOnTheAir() {
    await axios.request(onTheAir).then(function (response) {
      setOnTheAirList(response.data.results);
    });
  }
  useEffect(() => {
    getPopularSeries();
    getTopRatedSeries();
    getOnTheAir();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Header category={category} setCategory={setCategory} />
      <div className={styles.bodyContainer}>
        <div className={styles.categoryContainer}>
          <h2 className={styles.header}>Séries populares</h2>
          <ul className={styles.listContainer}>
            {popularSeriesList.map((item, index) => {
              return (
                <li key={index}>
                  <SeriesCard
                    id={item.id}
                    movieImg={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2 className={styles.header}>Séries aclamadas pela crítica</h2>
          <ul className={styles.listContainer}>
            {topRatedList.map((item, index) => {
              return (
                <li key={index}>
                  <SeriesCard
                    id={item.id}
                    movieImg={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2 className={styles.header}>No ar agora</h2>
          <ul className={styles.listContainer}>
            {onTheAirList.map((item, index) => {
              return (
                <li key={index}>
                  <SeriesCard
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
  );
}
