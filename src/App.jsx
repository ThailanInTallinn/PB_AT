import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Details from "./pages/details/details";
import Series from "./pages/series/series.jsx";
import SeriesDetails from "./pages/seriesDetails/seriesdetails.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [category, setCategory] = useState("");

  return (
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
  );
}
