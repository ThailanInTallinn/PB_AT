import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1>ArleteFlix</h1>

      <input type="text" placeholder="Buscar" />
      <button>Toggle theme</button>
    </div>
  );
}
