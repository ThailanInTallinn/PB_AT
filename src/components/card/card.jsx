import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function Card({ id, movieImg }) {
  return (
    <Link to={`/details/${id}`} className={styles.cardContainer}>
      <img src={movieImg} />
    </Link>
  );
}
