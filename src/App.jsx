import { useState } from 'react';
import imgLogo from '/img/Logo.jpg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleConversarClick = () => {
    const nombreUsuario = document.getElementById('nombre-usuario').value.trim();
    if (nombreUsuario !== '') {
      // Redirigir a la página de chat con el nombre de usuario como parámetro
      window.location.href = `./pages/chat/chat.html?nombreUsuario=${encodeURIComponent(nombreUsuario)}`;
    }
  };

  return (
    <>
      <div class="center-container">
        <div class="container">
          <img class="rounded-image" src={imgLogo} alt="Imagen Redondeada"></img>
          <input type="text" id="nombre-usuario" placeholder="Nombre del Usuario"></input>
          <button id="conversar-button" onClick={handleConversarClick}>
            Conversar
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
