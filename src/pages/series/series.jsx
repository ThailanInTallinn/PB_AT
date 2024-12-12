import Header from "../../components/header/header";
import SeriesCard from "../../components/seriesCard/seriescard";
import styles from "./series.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "../../context";

const imagesList = [];

const MY_KEY = "3c9c15df68a789c6aaa2a839b9fc02cd";
export const MY_ACESS_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTcyOTAxMDMxNi4xMTk0MTUsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksUKOcK-sBVNzC3lR54wAzewqEpyheexkftNYlxB9og";
const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/authentication",
  headers: {
    accept: "application/json",
    Authorization: MY_ACESS_TOKEN,
  },
};

const popularSeries = {
  method: "GET",
  url: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTczMjUyOTMyMi42NDIzNTEsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ABgAh2WXlIkArGQwAKX8L26J50GTKmW8S0wK4vKmrM",
  },
};

function multiplyImages() {
  for (let i = 0; i < 10; i++) {
    imagesList.push(<SeriesCard key={i} id={i} />);
  }
}

export default function Series() {
  multiplyImages();
  const [popularSeriesList, setPopularSeriesList] = useState([]);
  const { category, setCategory } = useAppContext();

  async function getPopularSeries() {
    await axios.request(popularSeries).then(function (response) {
      setPopularSeriesList(response.data.results);
    });
  }
  useEffect(() => {
    getPopularSeries();
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
          <h2 className={styles.header}>Categoria</h2>
          <ul className={styles.listContainer}>
            {imagesList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2 className={styles.header}>Categoria</h2>
          <ul className={styles.listContainer}>
            {imagesList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
