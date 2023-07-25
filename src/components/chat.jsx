// src/components/Chat.js

import React, { useState } from 'react';
import styles from '../chat_styles.css';

const Chat = () => {
  const [chatOutput, setChatOutput] = useState(`¡Bienvenido, ${nombreUsuario}! Comienza la conversación.\n`);
  const [mensajeInput, setMensajeInput] = useState('');

  const handleEnviarMensaje = () => {
    if (mensajeInput.trim() !== '') {
      setChatOutput((prevChatOutput) => `${prevChatOutput}${nombreUsuario}: ${mensajeInput}\n`);
      setMensajeInput('');
    }
  };

  return (
    <div style={styles.centerContainer}>
      <div style={styles.container}>
        <img
          className="rounded-image"
          style={styles.roundedImage}
          src="/img/Logo.jpg"
          alt="Imagen Redondeada"
        />
        <textarea id="chat-output" style={styles.textArea} rows="10" value={chatOutput} readOnly />
        <textarea
          id="mensaje-input"
          style={styles.textArea}
          placeholder="Escribe tu mensaje..."
          value={mensajeInput}
          onChange={(e) => setMensajeInput(e.target.value)}
        />
        <button id="send-button" onClick={handleEnviarMensaje}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
