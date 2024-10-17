import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import styles from "./details.module.css";
import axios from "axios";
import { MY_ACESS_TOKEN } from "../home/home";
import { useEffect, useState } from "react";

export default function Details() {
  const parametros = useParams();
  const [movieInfo, setMovieInfo] = useState({
    title: "",
    genre: [],
    releaseDate: "",
    overview: "",
    poster_path: "",
  });
  async function getMovie() {
    const accessOptions = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${parametros.id}`,
      headers: {
        accept: "application/json",
        Authorization: MY_ACESS_TOKEN,
      },
    };
    const genresNames = [];
    await axios.request(accessOptions).then(function (response) {
      const genresList = response.data.genres;
      const releaseYear = response.data.release_date.slice(0, 4);

      for (let genreObject in genresList) {
        genresNames.push(genresList[genreObject].name);
      }
      setMovieInfo({
        title: response.data.title,
        poster_path: `https://image.tmdb.org/t/p/original/${response.data.poster_path}`,
        genre: genresNames,
        releaseDate: releaseYear,
      });
    });
  }

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.detailsContainer}>
      <Header />
      <div className={styles.detailsBody}>
        <div className={styles.movieContainer}>
          <img src={movieInfo.poster_path} />
          <div className={styles.textContainer}>
            <h2>{movieInfo.title}</h2>
            <div className={styles.infoContainer}>
              <p>Ano de lançamento: {movieInfo.releaseDate}</p>
              <p>
                {`Gênero: `}
                {movieInfo.genre.map((item, index) => {
                  if (index == movieInfo.genre.length - 1) {
                    return item;
                  } else {
                    return `${item}, `;
                  }
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
