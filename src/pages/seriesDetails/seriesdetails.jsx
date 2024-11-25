import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import styles from "./seriesdetails.module.css";
import axios from "axios";
import { MY_ACESS_TOKEN } from "../home/home";
import { useEffect, useState } from "react";

export default function SeriesDetails() {
  const parametros = useParams();
  const [seriesInfo, setSeriesInfo] = useState({
    name: "",
    genre: [],
    releaseDate: "",
    overview: "",
    poster_path: "",
  });
  async function getSeries() {
    const accessOptions = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${parametros.id}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization: MY_ACESS_TOKEN,
      },
    };
    const genresNames = [];
    await axios.request(accessOptions).then(function (response) {
      const genresList = response.data.genres;
      const releaseYear = response.data.first_air_date.slice(0, 4);

      for (let genreObject in genresList) {
        genresNames.push(genresList[genreObject].name);
      }
      setSeriesInfo({
        name: response.data.name,
        poster_path: `https://image.tmdb.org/t/p/original/${response.data.poster_path}`,
        genre: genresNames,
        releaseDate: releaseYear,
      });
    });
  }

  useEffect(() => {
    getSeries();
  }, []);
  return (
    <div className={styles.detailsContainer}>
      <Header />
      <div className={styles.detailsBody}>
        <div className={styles.movieContainer}>
          <img src={seriesInfo.poster_path} />
          <div className={styles.textContainer}>
            <h2>{seriesInfo.name}</h2>
            <div className={styles.infoContainer}>
              <p>Ano de lançamento: {seriesInfo.releaseDate}</p>
              <p>
                {`Gênero: `}
                {seriesInfo.genre.map((item, index) => {
                  if (index == seriesInfo.genre.length - 1) {
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
