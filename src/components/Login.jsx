import React, { useState } from "react";
import '../css/Login.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {

  const [action,setAction] = useState("Registrarse");

  return (
    <div className='login-container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Iniciar Sesión"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Usuario" />
        </div>}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder= "Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder= "Contraseña" />
        </div>
      </div>
      {action==="Registrarse"?<div></div>:<div className="forgot-password">Olvidaste tu contraseña? <span>Ingresa aquí</span></div>}
      <div className="submit-container">
        <div className={action==="Iniciar Sesión"?"submit gray":"submit"} onClick={()=>{setAction("Registrarse")}}>Registrarse</div>
        <div className={action==="Registrarse"?"submit gray":"submit"} onClick={()=>{setAction("Iniciar Sesión")}}>Iniciar Sesión</div>
      </div>
    </div>
  )
}

export default Login;