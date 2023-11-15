import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../css/Navbar.css";
import Swal from 'sweetalert2';  // Import SweetAlert2

export default function Navbar() {
  const [usuario, setUsuarioAutenticado] = useState({});

  const handleCerrarSesion = () => {
    // Lógica para cerrar sesión
    localStorage.removeItem("token");
    Swal.fire({
      title: '¡Sesión cerrada!',
      text: 'Has cerrado la sesión',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      // Redirige al usuario a la página de inicio de sesión
      window.location.href = "/login"; // Cambia "/login" a la ruta correcta de tu página de inicio de sesión
    });
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
        <div className="d-flex">
          {/* Renderiza el botón solo si no estás en la ruta "/posts" */}
          {window.location.pathname !== "/posts" && (
            <Link to="/posts" className="btn btn-primary" style={{ marginRight: '15px' }}>
              Posts
            </Link>
          )}
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
        </div>
      </nav>
    </div>
  );
}
