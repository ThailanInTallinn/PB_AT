import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link to={"/"} className={styles.headerLogo}>
        <h1>ArleteFlix</h1>
      </Link>
      <input type="text" placeholder="Buscar" />
      <button>Toggle theme</button>
    </div>
  );
}
