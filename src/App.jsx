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

export default function App() {
  return (
    <BrowserRouter basename="/PB_AT/">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/series" element={<Series />} />
        <Route path="/seriesdetails/:id" element={<SeriesDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
