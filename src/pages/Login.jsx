import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí podrías agregar validación en el futuro
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default Login;

