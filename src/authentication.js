import { redirect } from "react-router-dom";
import axios from "axios";
import { renderIntoDocument } from "react-dom/test-utils";

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
      window.location.href = `https://www.themoviedb.org/authenticate/${data}?redirect_to=http://localhost:5173/`;
      localStorage.setItem("sessionID", JSON.stringify(data));
    });
}

export { handleAuthenticationProtected, isAuthenticated, loginTest };
