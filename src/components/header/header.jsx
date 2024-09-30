import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { useState } from "react";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className={styles.headerContainer}>
      <Link to={"/"} className={styles.headerLogo}>
        <h1>ArleteFlix</h1>
      </Link>
      <span
        onClick={() => {
          setMenuToggle(!menuToggle);
        }}
      >
        =
      </span>
      <nav style={{ display: menuToggle ? "flex" : "" }}>
        <div className={styles.mobileOptions}>
          <input type="text" placeholder="Buscar" />
          <button>Toggle theme</button>
        </div>
      </nav>
      <input type="text" placeholder="Buscar" />
      <button>Toggle theme</button>
    </div>
  );
}
