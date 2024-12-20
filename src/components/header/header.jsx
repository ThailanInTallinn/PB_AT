import { Link, redirect, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useAppContext } from "../../context";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  let navigate = useNavigate();
  const {
    setCategory,
    category,
    setSearchTerm,
    searchTerm,
    getSearch,
    getSeriesSearch,
  } = useAppContext();

  /*useEffect(() => {
    navigate(category);
  }, [category]);*/

  return (
    <div className={styles.headerContainer}>
      <Link
        to={"/"}
        className={styles.headerLogo}
        onClick={() => {
          setSearchTerm("");
          setCategory("/");
        }}
      >
        <h1>ArleteFlix</h1>
      </Link>
      <FormControl
        sx={{
          width: "20%",
          backgroundColor: "#71797E",
          borderRadius: 2,
          justifyContent: "center",
        }}
        variant="standard"
      >
        <InputLabel>Categoria</InputLabel>
        <Select
          onChange={(e) => {
            navigate(e.target.value);
            setCategory(e.target.value);
          }}
          value={category}
        >
          <MenuItem value={"/"}>Filmes</MenuItem>
          <MenuItem value={"/series"}>Séries</MenuItem>
        </Select>
      </FormControl>
      <span
        onClick={() => {
          setMenuToggle(!menuToggle);
        }}
      >
        =
      </span>
      <nav style={{ display: menuToggle ? "flex" : "" }}>
        <div className={styles.mobileOptions}>
          <input
            type="text"
            placeholder="Buscar"
            onChange={(e) => {
              setSearchTerm(e.target.value);

              if (searchTerm.length > 0) {
                if (category == "/") {
                  getSearch();
                } else {
                  getSeriesSearch();
                }
              }
            }}
          />
        </div>
      </nav>
      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => {
          setSearchTerm(e.target.value);

          if (searchTerm.length > 0) {
            if (category == "/") {
              getSearch();
            } else {
              getSeriesSearch();
            }
          }
        }}
      />
      {console.log(searchTerm)}
    </div>
  );
}
