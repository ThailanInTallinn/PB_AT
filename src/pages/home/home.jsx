import Header from "../../components/header/header";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.bodyContainer}>
        <div className={styles.listContainer}>
          <h2>Categoria</h2>
        </div>
        <div className={styles.listContainer}>
          <h2>Categoria</h2>
        </div>
        <div className={styles.listContainer}>
          <h2>Categoria</h2>
        </div>
        <div className={styles.listContainer}>
          <h2>Categoria</h2>
        </div>
        <div className={styles.listContainer}>
          <h2>Categoria</h2>
        </div>
        <div className={styles.listContainer}>
          <h2>Categoria</h2>
        </div>
        <div className={styles.listContainer}>
          <h2>Categoria</h2>
        </div>
        <div className={styles.listContainer}>
          <h2>Categoria</h2>
        </div>
        <div className={styles.listContainer}>
          <h2>Categoria</h2>
        </div>
        <div className={styles.listContainer}>
          <h2>Categoria</h2>
        </div>
      </div>
    </div>
  );
}
