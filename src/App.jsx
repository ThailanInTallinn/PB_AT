import "./App.css";
import Routes from "./index.jsx";
import Home from "./pages/home/home.jsx";
import Details from "./pages/details/details";
import Series from "./pages/series/series.jsx";
import SeriesDetails from "./pages/seriesDetails/seriesdetails.jsx";
import { useEffect, useState } from "react";
import Protected from "./protected.jsx";
import Signin from "./pages/signin/signin.jsx";
import axios from "axios";
import {
  isAuthenticated,
  handleAuthenticationProtected,
} from "./authentication.js";
import AppProvider from "./context.jsx";

export default function App() {
  /*return (
    <BrowserRouter basename="/PB_AT/">
      <Routes>
        <Route
          index
          path="/"
          element={<Home category={category} setCategory={setCategory} />}
        />

        <Route path="/details/:id" element={<Details />} />
        <Route
          path="/series"
          element={<Series category={category} setCategory={setCategory} />}
        />
        <Route path="/seriesdetails/:id" element={<SeriesDetails />} />
      </Routes>
    </BrowserRouter>
  );*/

  /*const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<Protected />}>
          <Route
            index
            element={<Home category={category} setCategory={setCategory} />}
            loader={() => handleAuthenticationProtected()}
          />
          <Route
            path="/details/:id"
            element={<Details />}
            loader={() => handleAuthenticationProtected()}
          />
          <Route
            path="/series"
            element={
              <Series
                category={category}
                setCategory={setCategory}
                loader={() => handleAuthenticationProtected()}
              />
            }
          />
          <Route
            path="/seriesdetails/:id"
            element={<SeriesDetails />}
            loader={() => handleAuthenticationProtected()}
          />
        </Route>
        <Route
          path="signin"
          element={<Signin />}
          loader={() => isAuthenticated()}
        />
      </Route>
    )
  );*/

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
