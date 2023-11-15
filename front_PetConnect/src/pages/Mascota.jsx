import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/Mascota.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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

const db = getFirestore(app);
const storage = getStorage(app);

function Mascota() {
  const { id } = useParams();
  const [mascota, setMascota] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

  //OBTENER MASCOTA////////////////////////////////////////////////////////////////////
  const obtenerMascota = async () => {
    try {
      const response = await fetch("http://localhost:5000/obtenermascota", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
  
      const data = await response.json();
  
      setMascota((prevMascota) => ({ ...prevMascota, ...data }));
  
      // Llama a obtenerUsuario aquí, después de que se haya establecido el estado de mascota
      obtenerUsuario(data.usuario);
    } catch (error) {
      console.error(
        "Error al obtener la información de la mascota:",
        error.response.data
      );
    }
  };
  
  const obtenerUsuario = async (usuario2) => {
    try {
      const response = await fetch("http://localhost:5000/usuariopornombre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: usuario2 }),
      });
  
      const data = await response.json();

      console.log(data);
      setUsuario((prevUsuario) => ({ ...prevUsuario, ...data }));
    } catch (error) {
      console.error(
        "Error al obtener la información del usuario:",
        error.response.data
      );
    }
  };
  
  useEffect(() => {
    obtenerMascota();
  }, []);
  //////////////////////////////////////////////////////////////////////////////////

  //OBTENER USUARIO AUTENTICADO/////////////////////////////////////////////////////
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
  ///////////////////////////////////////////////////////////////////////////////////////


  //AGREGAR NUEVA PUBLICACION/////////////////////////////////////////////////////////////
  const [textoPublicacion, setTextoPublicacion] = useState("");
  const [imagenPublicacion, setImagenPublicacion] = useState(null);

  const handleTextoChange = (e) => {
    setTextoPublicacion(e.target.value);
  };

  const handleImagenChange = (e) => {
    setImagenPublicacion(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ArchivoI = imagenPublicacion;
    const refArchivo = ref(storage, `Fotos publicaciones/${ArchivoI.name}`);
    await uploadBytes(refArchivo, ArchivoI);
    const urlImDesc = await getDownloadURL(refArchivo);

    const urlImagen=urlImDesc;
    const idDocMascota= mascota.id;
    console.log(idDocMascota);
    console.log(urlImagen);
    console.log(textoPublicacion);

    try {
      const response = await fetch('http://localhost:5000/agregarpublicacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({idDocMascota, urlImagen, textoPublicacion, usuario:usuario.usuario}),
      });
  
      const data = await response.json();
  
      obtenerMascota();
      // Añade la nueva mascota al estado de las mascotas
      setMascota(prevMascota => ({
        ...prevMascota,
        publicaciones: [...prevMascota.publicaciones, data],
      }));
  
      // Limpia los campos del formulario
      setTextoPublicacion("");
      setImagenPublicacion(null);
    } catch (error) {
      console.error('Error al agregar la publicacion:', error);
    }
  };
///////////////////////////////////////////////////////////////////////////////////////////

  if (!mascota ) {
    return <div>Cargando...</div>;
  }

  if(!usuario){
    return <div>Cargando...</div>;
  }

  if(!usuarioAutenticado){
    return <div>Cargando...</div>;
  }

  return (
    <div className="maincontainer">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4 col-xl-3 order-2 order-lg-1">
            <div class="card mb-3">
              <div class="card-body text-center">
                <img
                  src={mascota.imagen}
                  alt="Jassa Jas"
                  class="img-fluid rounded-circle mb-2"
                  width="128"
                  height="128"
                />
                <h4 class="card-title mb-0">{mascota.nombre}</h4>
                      {/*Solo para el dueño del perfil*/}
                      {usuarioAutenticado &&
                      usuarioAutenticado.usuario === usuario.usuario && (
                        <>
                  <a
                    class= "btn-sm mb-2"
                    href="/login"
                    onClick=""
                  >
                    <button class="btn btn-primary">Volver al perfil</button>
                  </a>
                  </>
                      )}
                
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-header">
                <div class="card-actions float-right">
                  <div class="dropdown show">
                    <a href data-toggle="dropdown" data-display="static">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-more-horizontal align-middle"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                    </div>
                  </div>
                </div>
                <h5 class="card-title mb-0">Sobre mí</h5>
              </div>
              <div class="card-body">
                <ul class="list-unstyled mb-0">
                  <li class="mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-home feather-sm mr-1"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>{" "}
                    Raza: <a>Mestizo</a>
                  </li>
                  <li class="mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-briefcase feather-sm mr-1"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>{" "}
                    Estado: <a>En adopción</a>
                  </li>
                  <li class="mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-map-pin feather-sm mr-1"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>{" "}
                    Edad: <a>3 años</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card mb-3">
              <div class="card-header">
                <div class="card-actions float-right">
                  <div class="dropdown show">
                    <a href data-toggle="dropdown" data-display="static">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-more-horizontal align-middle"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                    </div>
                  </div>
                </div>
                <h5 class="card-title mb-0">Responsable</h5>
              </div>
              <div class="card-body">
                <div class="media">
                  <img
                    src={usuario.foto_perfil}
                    width="56"
                    height="56"
                    class="rounded-circle mr-2"
                    alt="Andrew Jones"
                  />
                  <div class="media-body">
                    <p class="my-1">
                      <strong>{usuario.usuario}</strong>
                    </p>
                    <a class="btn btn-sm btn-outline-primary" href="#">
                      Unfollow
                    </a>
                  </div>
                </div>

                <hr class="my-2" />
              </div>
            </div>
          </div>

          {/*Feed*/}
          <div class="col-12 col-lg-8 col-xl-6 order-1 order-lg-2">
            <div class="card">
              <div class="card-body h-100">
              
                {/* Formulario de Publicaciones */}
                {usuarioAutenticado &&
                 (
                  <>
                  <form onSubmit={handleSubmit}>
                    <div class="form-group mb-2">
                      <textarea
                        class="form-control"
                        rows="3"
                        placeholder="Escribe tu publicación"
                        value={textoPublicacion}
                        onChange={handleTextoChange}
                      />
                    </div>
                    <div class="form-group mb-3">
                      <input
                        type="file"
                        class="form-control-file"
                        accept="image/*"
                        onChange={handleImagenChange}
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Publicar
                    </button>
                  </form>
                  <hr />
                </>
                )}
                {/*////////*/}

                {/*Publicaciones*/}
                {mascota.publicaciones.map((publicacion) => (
                  <div class="media" key={publicacion.id}>
                    <img
                      src={mascota.imagen}
                      width="56"
                      height="56"
                      class="rounded-circle mr-3"
                      alt={mascota.nombre}
                    />
                    <div class="media-body">
                      <p class="mb-2">
                        <strong>{mascota.nombre}</strong>
                      </p>
                      <p>{publicacion.descripcion}</p>
                      <div class="row no-gutters mt-1">
                        <div class="col-6">
                          <img
                            src={publicacion.imagen}
                            class="img-fluid pr-1"
                            alt="Unsplash"
                          />
                        </div>
                      </div>
                      <small class="text-muted">Today 7:21 pm</small>
                      <br />
                      <a href class="btn btn-sm btn-danger mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-heart feather-sm"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>{" "}
                        Like
                      </a>
                    </div>
                    <hr />
                  </div>
                ))}
                <hr />
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-12 col-xl-3 order-3 order-lg-3">
            <div class="card">
              <div class="card-header">
                <div class="card-actions float-right">
                  <div class="dropdown show">
                    <a href data-toggle="dropdown" data-display="static">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-more-horizontal align-middle"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                    </div>
                  </div>
                </div>
                <h5 class="card-title mb-0">Actividad Reciente</h5>
              </div>
              <div class="card-body h-100">
                <div class="media">
                  <img
                    src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                    width="36"
                    height="36"
                    class="rounded-circle mr-2"
                    alt="Jassa Jas"
                  />
                  <div class="media-body">
                    <small class="float-right text-navy">5m ago</small>
                    <strong>Jassa Jas</strong> started following{" "}
                    <strong>Marie Salter</strong>
                    <br />
                    <small class="text-muted">Today 7:51 pm</small>
                    <br />
                  </div>
                </div>
                <hr />
                <a href class="btn btn-primary btn-sm btn-block">
                  Cargar más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mascota;
