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

export default function App() {
  return (
    <BrowserRouter basename="/PB_AT/">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
