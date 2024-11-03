import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/ingreso/ingreso.scss';

const Ingreso = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/mapa');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleContinue}>Continuar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Ingreso;
