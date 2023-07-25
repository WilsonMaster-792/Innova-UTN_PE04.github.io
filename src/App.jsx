import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import imgLogo from '/img/Logo.jpg';
import './App.css';

function Home({ onConversarClick }) {
  const [nombreUsuario, setNombreUsuario] = useState('');

  const handleNombreUsuarioChange = (event) => {
    setNombreUsuario(event.target.value);
  };

  return (
    <>
      <div className="center-container">
        <div className="container">
          <img className="rounded-image" src={imgLogo} alt="Imagen Redondeada"></img>
          <input
            type="text"
            id="nombre-usuario"
            placeholder="Nombre del Usuario"
            value={nombreUsuario}
            onChange={handleNombreUsuarioChange}
          ></input>
          <button id="conversar-button" onClick={() => onConversarClick(nombreUsuario)}>
            Conversar
          </button>
        </div>
      </div>
    </>
  );
}

function Chat({ nombreUsuario }) {
  // Aquí puedes implementar la lógica para la página de chat
  return (
    <div>
      <h2>Página de Chat</h2>
      <p>Bienvenido, {nombreUsuario}! Comienza la conversación.</p>
    </div>
  );
}

function App() {
  const [showChat, setShowChat] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState('');

  const handleConversarClick = (nombreUsuario) => {
    setShowChat(true);
    setNombreUsuario(nombreUsuario);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {showChat ? (
            <Chat nombreUsuario={nombreUsuario} />
          ) : (
            <Home onConversarClick={handleConversarClick} />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
