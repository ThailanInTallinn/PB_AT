import Header from "../../components/header/header";
import Card from "../../components/card/card";
import styles from "./home.module.css";
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

function multiplyImages() {
  for (let i = 0; i < 10; i++) {
    imagesList.push(<Card key={i} id={i} />);
  }
}

export default function Home() {
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const { category, setCategory } = useAppContext();

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
    //authentication();
    getPopularMovies();
    getUpcoming();
    getTopRated();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Header category={category} setCategory={setCategory} />
      <div className={styles.bodyContainer}>
        <div className={styles.categoryContainer}>
          <h2>Filmes populares</h2>
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
          <h2>Próximos lançamentos</h2>
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
          <h2>Filmes aclamados pela crítica</h2>
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
  );
}
