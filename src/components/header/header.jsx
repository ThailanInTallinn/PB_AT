import { Link, redirect, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function Header({ category, setCategory }) {
  const [menuToggle, setMenuToggle] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    navigate(category);
  }, [category]);

  return (
    <div className={styles.headerContainer}>
      <Link to={"/"} className={styles.headerLogo}>
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
            setCategory(() => e.target.value);
          }}
        >
          {console.log(category)}
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
          <input type="text" placeholder="Buscar" />
        </div>
      </nav>
      <input type="text" placeholder="Buscar" />
    </div>
  );
}
