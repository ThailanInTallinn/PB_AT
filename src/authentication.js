import { redirect } from "react-router-dom";
import axios from "axios";
import { renderIntoDocument } from "react-dom/test-utils";

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/authentication/token/new",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTcyNDE1MDQ4My42MTQsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FeoBm65lFmd2XuDMDnToY73wD4UJ5MvACBjRFYVt4T0",
  },
};

async function isAuthenticated() {
  const sessionToken = localStorage.getItem("sessionID");

  if (sessionToken) throw redirect("/");
  return null;
}

async function handleAuthenticationProtected() {
  const sessionToken = localStorage.getItem("sessionID");

  if (!sessionToken) throw redirect("/signin");
  return null;
}

async function loginTest() {
  let test;
  let sessionToken = await axios
    .request(options)
    .then((res) => res.data.request_token)
    .then((data) => {
      window.location.href = `https://www.themoviedb.org/authenticate/${data}?redirect_to=https://arleteflix.netlify.app/`;
      localStorage.setItem("sessionID", JSON.stringify(data));
    });
}

export { handleAuthenticationProtected, isAuthenticated, loginTest };
