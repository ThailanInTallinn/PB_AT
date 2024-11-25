import { Link } from "react-router-dom";
import styles from "./seriescard.module.css";

export default function SeriesCard({ id, movieImg }) {
  return (
    <Link to={`/seriesdetails/${id}`} className={styles.cardContainer}>
      <img src={movieImg} />
    </Link>
  );
}
