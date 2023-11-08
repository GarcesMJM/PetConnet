import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/ForgotPwd.css";

import imagen from "../Assets/cat-2934720_1280.jpg";
import email_icon from "../Assets/email.png";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp11FAxsh_JtvCyzj8sf9OXbmBO4PGBt8",
  authDomain: "petconnect2-4be50.firebaseapp.com",
  projectId: "petconnect2-4be50",
  storageBucket: "petconnect2-4be50.appspot.com",
  messagingSenderId: "948988551923",
  appId: "1:948988551923:web:afd3d0cff1d450ae278d86",
  measurementId: "G-3JCCDR9K1G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const ForgotPwd = () => {
  const [email, setEmail] = useState(""); // Estado para el correo electrónico

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const recuperarpwd = async (e) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error(
        "Error al obtener la información del usuario:",
        error.response.data
      );
    }
  };

  return (
    <div className="login-container">
      <div className="row fila">
        <div className="col-md-4">
          <div className="padre">
            <div className="col-md-13">
              <div className="header">
                <div className="text">Recuperar Contraseña</div>
                <div className="underline"></div>
              </div>

              <div className="card card-body shadow-lg">
                <form className="form">
                  <div className="inputs">
                    <div className="input">
                      <img src={email_icon} alt="" />
                      <input
                        type="email"
                        className="cajatexto"
                        placeholder=" Ingrese Email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                  </div>
                  <div className="submit-container">
                    <div className="submit" onClick={recuperarpwd}>
                      Recuperar contraseña
                    </div>
                  </div>
                  <div className="back">
                    <Link to="/login">Regresar</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <img src={imagen} alt="" className="tamaño-imagen shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPwd;
