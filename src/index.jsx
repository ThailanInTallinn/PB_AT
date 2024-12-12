import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Protected />}>
        <Route
          index
          element={<Home />}
          loader={() => handleAuthenticationProtected()}
        />
        <Route
          path="/details/:id"
          element={<Details />}
          loader={() => handleAuthenticationProtected()}
        />
        <Route
          path="/series"
          element={<Series loader={() => handleAuthenticationProtected()} />}
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
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
