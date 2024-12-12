import { useEffect, useState } from "react";

import styles from "./signin.module.css";
import axios from "axios";
import { redirect } from "react-router-dom";
import { loginTest } from "../../authentication";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/authentication/token/new",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTcyNDE1MDQ4My42MTQsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FeoBm65lFmd2XuDMDnToY73wD4UJ5MvACBjRFYVt4T0",
  },
};

export default function Signin() {
  const [sessionToken, setSessionToken] = useState("");

  return (
    <div className={styles.outerContainer}>
      <h1 className={styles.header1}>Bem-vindo ao ArleteFlix</h1>

      <button
        className={styles.button}
        onClick={() => {
          loginTest();
        }}
      >
        Entrar
      </button>
    </div>
  );
}
