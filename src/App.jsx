import React, { useState } from 'react';
import imgLogo from '/img/Logo.jpg';
import './App.css';
import axios from 'axios';

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
    setMensaje2('Hola ' + nombreUsuario);
  };

  const handleEnviarClick = async () => {
    const OPENAI_API_KEY = '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'; // Reemplaza 'TU_API_KEY' con tu API key de OpenAI
    const apiEndpoint = 'https://api.openai.com/v1/completions';
    const promtDirectives = 'Mi nombre es '+nombreUsuario +'Te llamarás '+'Gummy'+' Responde al siguiente mensaje como si fueras un juguete amigable por favor: '+mensaje1
    const params = {
      model: 'text-davinci-003',
      prompt: promtDirectives, // Usamos el mensaje1 como prompt para la API
      max_tokens: 4028,
      temperature: 0
    };

    try {
      const response = await axios.post(apiEndpoint, params, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        }
      });
      console.log('Respuesta de la API:', response.data);
      // El resultado de la API estará en response.data.choices[0].text
      const resultadoAPI = response.data.choices[0].text;

      // Actualizamos el estado mensaje2 con el resultado de la API
      setMensaje2(resultadoAPI);
    } catch (error) {
      console.error('Error al realizar la solicitud a la API de OpenAI:', error);
    }
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
                readOnly // Usamos readOnly para que no se pueda editar el segundo campo
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
