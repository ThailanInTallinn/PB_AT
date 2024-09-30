import Header from "../../components/header/header";
import Card from "../../components/card/card";
import styles from "./home.module.css";
import { useEffect, useState } from "react";

const imagesList = [];

function multiplyImages() {
  for (let i = 0; i < 10; i++) {
    imagesList.push(<Card key={i} />);
  }
}

export default function Home() {
  multiplyImages();

  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.bodyContainer}>
        <div className={styles.categoryContainer}>
          <h2>Categoria</h2>
          <ul className={styles.listContainer}>
            {imagesList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2>Categoria</h2>
          <ul className={styles.listContainer}>
            {imagesList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2>Categoria</h2>
          <ul className={styles.listContainer}>
            {imagesList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2>Categoria</h2>
          <ul className={styles.listContainer}>
            {imagesList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2>Categoria</h2>
          <ul className={styles.listContainer}>
            {imagesList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2>Categoria</h2>
          <ul className={styles.listContainer}>
            {imagesList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2>Categoria</h2>
          <ul className={styles.listContainer}>
            {imagesList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2>Categoria</h2>
          <ul className={styles.listContainer}>
            {imagesList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2>Categoria</h2>
          <ul className={styles.listContainer}>
            {imagesList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.categoryContainer}>
          <h2>Categoria</h2>
          <ul className={styles.listContainer}>
            {imagesList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
