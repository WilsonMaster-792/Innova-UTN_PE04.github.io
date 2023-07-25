import React, { useState } from 'react';
import imgLogo from '/img/Logo.jpg';
import './App.css';

function App() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [mensaje1, setMensaje1] = useState('');
  const [mensaje2, setMensaje2] = useState('');

  const handleNombreUsuarioChange = (event) => {
    setNombreUsuario(event.target.value);
  };

  const handleConversarClick = () => {
    setShowChat(true);
    setMensaje1('Hola')
  };

  const handleEnviarClick = () => {
    // Aquí puedes implementar la lógica para enviar los mensajes
    // Por ejemplo, podrías guardar los mensajes en un estado o enviarlos a un servidor
  };

  return (
    <>
      <div className="center-container">
        <div className="container">
          <img className="rounded-image" src={imgLogo} alt="Imagen Redondeada" />
          {!showChat && (
            <>
              <input
                type="text"
                id="nombre-usuario"
                placeholder="Nombre del Usuario"
                value={nombreUsuario}
                onChange={handleNombreUsuarioChange}
              />
              <button id="conversar-button" onClick={handleConversarClick}>
                Conversar
              </button>
            </>
          )}
          {showChat && (
            <>
              <textarea
                id="chat-input-1"
                placeholder="Escribe tu mensaje..."
                value={mensaje1}
                onChange={(e) => setMensaje1(e.target.value)}
              ></textarea>
              <textarea
                id="chat-input-2"
                placeholder="Escribe tu mensaje..."
                value={mensaje2}
                onChange={(e) => setMensaje2(e.target.value)}
              ></textarea>
              <button id="send-button" onClick={handleEnviarClick}>
                Enviar
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
