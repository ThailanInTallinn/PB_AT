import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import styles from "./details.module.css";

export default function Details() {
  const parametros = useParams();
  return (
    <div className={styles.detailsContainer}>
      <Header />
      <div className={styles.detailsBody}>
        <div className={styles.movieContainer}>
          <img src="https://rukminim2.flixcart.com/image/850/1000/poster/x/p/6/posterskart-breaking-bad-cover-poster-pkbb19-medium-original-imaebf5hqjvbcmmh.jpeg?q=90&crop=false" />
          <div className={styles.textContainer}>
            <h2>Breaking Bad</h2>
            <div className={styles.infoContainer}>
              <p>Ano de lançamento: 2008</p>
              <p>Gênero: Drama, Ficção</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
