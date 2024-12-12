import { createContext, useContext, useState } from "react";
import axios from "axios";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [category, setCategory] = useState("/");
  const [searchTerm, setSearchTerm] = useState("");
  const [resultsList, setResultsList] = useState([]);
  const [seriesResultsList, setSeriesResultsList] = useState([]);
  const sharedState = {
    setCategory,
    category,
    searchTerm,
    setSearchTerm,
    getSearch,
    resultsList,
    seriesResultsList,
    getSeriesSearch,
  };

  const formatString = (oldStr) => {
    const newStr = oldStr.replaceAll(" ", "%20");
    return newStr;
  };

  const search = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${formatString(
      searchTerm
    )}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTcyOTAxMDMxNi4xMTk0MTUsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksUKOcK-sBVNzC3lR54wAzewqEpyheexkftNYlxB9og",
    },
  };

  const searchSeries = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/tv?query=${formatString(
      searchTerm
    )}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzljMTVkZjY4YTc4OWM2YWFhMmE4MzliOWZjMDJjZCIsIm5iZiI6MTcyOTAxMDMxNi4xMTk0MTUsInN1YiI6IjY2YzQ3MmQzZTk2NjFkMzNmZDk2YTMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksUKOcK-sBVNzC3lR54wAzewqEpyheexkftNYlxB9og",
    },
  };

  async function getSearch() {
    await axios.request(search).then(function (response) {
      setResultsList(response.data.results);
    });
  }

  async function getSeriesSearch() {
    await axios.request(searchSeries).then(function (response) {
      setSeriesResultsList(response.data.results);
    });
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context == null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export default AppProvider;
