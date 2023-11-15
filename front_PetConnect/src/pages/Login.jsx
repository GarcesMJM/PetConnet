import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
import imagen from "../Assets/cat-2934720_1280.jpg";
import "../css/Navbar.css";
import Swal from 'sweetalert2';  // Añade esta línea



import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Login = () => {
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [email, setEmail] = useState(""); // Estado para el correo electrónico
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [action, setAction] = useState("Iniciar Sesión");
  const [showPwd, setShowPwd] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const sendDataToBackend = async (e) => {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await response.json();

      if (data.message === true) {
        // Cambia el window.alert por SweetAlert2
        Swal.fire('Usuario registrado exitosamente', '', 'success');
        setAction("Iniciar Sesión");
      } else {
        // Cambia el window.alert por SweetAlert2
        Swal.fire('Error al registrar el usuario', '', 'error');
      }

      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error al enviar datos al backend:", error);
    }
  };

  const sendDataToBackend2 = async (e, history) => {
    try {
      const response = await fetch("http://localhost:5000/iniciarsesion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Respuesta del servidor:", data.message);

      // Cambia el window.alert por SweetAlert2
      Swal.fire(data.message, '', data.token ? 'success' : 'error');

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate(`/profile/${data.usuario}`, { replace: true });
      }
    } catch (error) {
      console.error("Error al enviar datos al backend:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="row fila">
        <div className="col-md-4">
          <div className="padre">
            <div className="col-md-13">
              <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
              </div>

              <div className="card card-body shadow-lg">
                <form className="form">
                  <div className="inputs">
                    {action === "Iniciar Sesión" ? (
                      <div></div>
                    ) : (
                      <div className="input">
                        <img src={user_icon} alt="" />
                        <input
                          type="text"
                          className="cajatexto"
                          placeholder="Ingrese Usuario"
                          value={username}
                          onChange={handleUsernameChange}
                        />
                      </div>
                    )}

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
                    <div className="input">
                      <img src={password_icon} alt="" />
                      <input
                        type={showPwd ? "text" : "password"}
                        className="cajatexto"
                        placeholder="Ingrese Contraseña"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <div
                        className="position-absolute pointer pwd-icon"
                        onClick={() => setShowPwd(!showPwd)}
                      >
                        {showPwd ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height={"1.5rem"}
                          >
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path
                              fillRule="evenodd"
                              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height={"1.5rem"}
                          >
                            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  {action === "Registrarse" ? (
                    <div></div>
                  ) : (
                    <div className="forgot-password">
                      <span>
                        <Link to="/olvidocontraseña">Ingresa aquí</Link>
                      </span>
                    </div>
                  )}
                  <div className="submit-container">
                    <div
                      className={
                        action === "Registrarse" ? "submit gray" : "submit"
                      }
                      onClick={
                        action === "Registrarse"
                          ? () => setAction("Iniciar Sesión")
                          : sendDataToBackend2
                      }
                    >
                      Iniciar Sesión
                    </div>
                    <div
                      className={
                        action === "Iniciar Sesión" ? "submit gray" : "submit"
                      }
                      onClick={
                        action === "Iniciar Sesión"
                          ? () => setAction("Registrarse")
                          : sendDataToBackend
                      }
                    >
                      Registrarse
                    </div>
                  </div>

                  <div className="submit-container2" class="regresar">
                  <a><Link to="/">Regresar</Link></a>
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

export default Login;
