import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function Card({ id }) {
  return (
    <Link to={`/details/${id}`} className={styles.cardContainer}>
      <img src="https://rukminim2.flixcart.com/image/850/1000/poster/x/p/6/posterskart-breaking-bad-cover-poster-pkbb19-medium-original-imaebf5hqjvbcmmh.jpeg?q=90&crop=false" />
    </Link>
  );
}
