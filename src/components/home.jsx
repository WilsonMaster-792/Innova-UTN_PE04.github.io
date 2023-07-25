// src/components/Home.js

import React from 'react';
import styles from '../styles.css';

const Home = () => {
  return (
    <div style={styles.centerContainer}>
      <div style={styles.container}>
        <img
          className="rounded-image"
          style={styles.roundedImage}
          src="/img/Logo.jpg"
          alt="Imagen Redondeada"
        />
        <input type="text" id="nombre-usuario" placeholder="Nombre del Usuario" />
        <button id="conversar-button">Conversar</button>
      </div>
    </div>
  );
};

export default Home;
