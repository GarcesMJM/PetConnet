import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../css/Navbar.css";

export default function Navbar() {
  const [usuario, setUsuarioAutenticado] = useState({});

  const handleCerrarSesion = () => {
    // Lógica para cerrar sesión
    localStorage.removeItem("token");
    window.alert("Has cerrado la sesión");
    // Redirige al usuario a la página de inicio de sesión
    window.location.href = "/login"; // Cambia "/login" a la ruta correcta de tu página de inicio de sesión
  };

  // OBTENER USUARIO AUTENTICADO
  useEffect(() => {
    const obtenerUsuarioAutenticado = async () => {
      try {
        const response = await fetch("http://localhost:5000/obtenerusuario", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: localStorage.getItem("token") }),
        });

        const data = await response.json();

        console.log(data);
        setUsuarioAutenticado((prevUsuarioAutenticado) => ({
          ...prevUsuarioAutenticado,
          ...data,
        }));
      } catch (error) {
        console.error(
          "Error al obtener la información del usuario autenticado:",
          error.response.data
        );
      }
    };

    obtenerUsuarioAutenticado();
  }, []);

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-light bg-white">
      <button className="navbar-brand" id="navbar-brand" type="button">
        PetConnect
      </button>
        <form className="form-inline">
          {/* Contenido del formulario, si es necesario */}
        </form>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            <FontAwesomeIcon icon={faUser} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={`/profile/${usuario.usuario}`}>
                <Button variant="light">Perfil</Button>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Button variant="light" onClick={handleCerrarSesion}>
                Cerrar Sesión
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
}
