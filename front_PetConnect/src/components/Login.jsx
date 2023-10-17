import React, { useState } from "react";
import '../css/Login.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [email, setEmail] = useState(""); // Estado para el correo electrónico
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [action, setAction] = useState("Registrarse");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const sendDataToBackend = async () => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, username })
      });

      const data = await response.json();

      // Aquí puedes manejar la respuesta del backend si es necesario

    } catch (error) {
      console.error('Error al enviar datos al backend:', error);
    }
  }

  return (
    <div className='login-container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Iniciar Sesión"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Usuario" value={username} onChange={handleUsernameChange} />
        </div>}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder= "Email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder= "Contraseña" value={password} onChange={handlePasswordChange} />
        </div>
      </div>
      {action==="Registrarse"?<div></div>:<div className="forgot-password">Olvidaste tu contraseña? <span>Ingresa aquí</span></div>}
      <div className="submit-container">
        <div className={action==="Iniciar Sesión"?"submit gray":"submit"} onClick={sendDataToBackend}>Registrarse</div>
        <div className={action==="Registrarse"?"submit gray":"submit"} onClick={()=>{setAction("Iniciar Sesión")}}>Iniciar Sesión</div>
      </div>
    </div>
  )
}

export default Login;
