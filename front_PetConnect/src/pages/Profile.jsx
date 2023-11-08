import React, { useState, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../css/Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

function Profile() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

  //OBTENER USUARIO DUEÑO DEL PERFIL/////////////////////////////////////////////////
  const obtenerUsuario = async () => {
    try {
      const response = await fetch("http://localhost:5000/obtenerusuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("token") }),
      });

      const data = await response.json();

      setUsuario((prevUsuario) => ({ ...prevUsuario, ...data }));
    } catch (error) {
      console.error(
        "Error al obtener la información del usuario:",
        error.response.data
      );
    }
  };

  useEffect(() => {
    obtenerUsuario();
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

  //Se edita la información del usuario

  const [edit, setEdit] = useState(false);
  const [nameuser, setNameuser] = useState("");
  const [lugarResidencia, setLugarResidencia] = useState("");
  const [lugarOrigen, setLugarOrigen] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState(null);

  const handleNameChange = (e) => {
    setNameuser(e.target.value);
  };

  const handleLugarChange = (e) => {
    setLugarResidencia(e.target.value);
  };

  const handleOrigenChange = (e) => {
    setLugarOrigen(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleProfileChange = (e) => {
    setProfile(e.target.files[0]);
  };

  const handleImage = async (e) => {
    e.preventDefault();
    const archivoI = profile;
    const refArchivo = ref(storage, `Fotos usuarios/${archivoI.name}`);
    await uploadBytes(refArchivo, archivoI);
    const urlImDesc = await getDownloadURL(refArchivo);

    try {
      const response = await fetch("http://localhost:5000/cambiarfoto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          foto_perfil: urlImDesc,
          Name: nameuser,
          Residencia: lugarResidencia,
          Origen: lugarOrigen,
          Phone: phone,
          nombreUsuario: usuario.usuario,
          token: localStorage.getItem("token"),
        }),
      });

      const data = await response.json();

      window.alert(data.message);

      obtenerUsuario();

      setEdit(false);
    } catch (error) {
      console.error(
        "Error al obtener la información del usuario:",
        error.response.data
      );
    }
  };

  //AGREGAR NUEVA MASCOTA///////////////////////////////////////////////////////////
  const [mostrarPanel, setMostrarPanel] = useState(false);
  const [nombreMascota, setNombreMascota] = useState("");
  const [imagenMascota, setImagenMascota] = useState(null);

  const handleNombreChange = (e) => {
    setNombreMascota(e.target.value);
  };

  const handleImagenChange = (e) => {
    setImagenMascota(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ArchivoI = imagenMascota;
    const refArchivo = ref(storage, `Fotos mascotas/${ArchivoI.name}`);
    await uploadBytes(refArchivo, ArchivoI);
    const urlImDesc = await getDownloadURL(refArchivo);

    const urlImagen = urlImDesc;
    const nombreUsuario = usuario.usuario;
    console.log(nombreMascota);
    console.log(urlImagen);
    console.log(nombreUsuario);
    try {
      const response = await fetch("http://localhost:5000/agregarmascota", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombreMascota, urlImagen, nombreUsuario }),
      });

      const data = await response.json();

      obtenerUsuario();
      // Añade la nueva mascota al estado de las mascotas

      // Limpia los campos del formulario
      setNombreMascota("");
      setImagenMascota(null);
      setMostrarPanel(false);
    } catch (error) {
      console.error("Error al agregar la mascota:", error);
    }
  };
  //////////////////////////////////////////////////////////////////////////////////

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.alert("Has cerrado la sesión");
  };

  if (!usuario) {
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
                  src={usuario.foto_perfil}
                  alt="Jassa Jas"
                  class="img-fluid rounded-circle mb-2"
                  width="128"
                  height="128"
                />
                <h4 class="card-title mb-0">{usuario.usuario}</h4>

                <div>
                  <a class="btn btn-primary btn-sm" href="#">
                    Follow
                  </a>
                  <a class="btn btn-primary btn-sm" href="#">
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
                      class="feather feather-message-square"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>{" "}
                    Message
                  </a>
                  <a
                    class="btn btn-primary btn-sm"
                    href="/login"
                    onClick={handleLogout}
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>

            {/*Solo para el dueño del perfil*/}
            {usuarioAutenticado &&
              usuarioAutenticado.usuario === usuario.usuario && (
                <>
                  <hr class="my-2" />
                  <div class="text-muted mb-2" onClick={() => setEdit(true)}>
                    Editar perfil
                  </div>
                  {edit && (
                    <div>
                      <form onSubmit={handleImage}>
                        <input
                          type="text"
                          value={nameuser}
                          onChange={handleNameChange}
                          placeholder="Nombre Completo"
                        />
                        <input
                          type="text"
                          value={lugarResidencia}
                          onChange={handleLugarChange}
                          placeholder="Lugar de Residencia"
                        />
                        <input
                          type="text"
                          value={lugarOrigen}
                          onChange={handleOrigenChange}
                          placeholder="Lugar de Origen"
                        />
                        <input
                          type="text"
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="Teléfono"
                        />
                        <input type="file" onChange={handleProfileChange} />

                        <button type="submit">Guardar</button>
                      </form>
                    </div>
                  )}
                  <hr class="my-2" />
                  <div
                    class="text-muted mb-2"
                    onClick={() => setMostrarPanel(true)}
                  >
                    Agregar mascota
                  </div>
                  {mostrarPanel && (
                    <div>
                      <form onSubmit={handleSubmit}>
                        <input
                          type="text"
                          value={nombreMascota}
                          onChange={handleNombreChange}
                          placeholder="Nombre de la mascota"
                        />
                        <input type="file" onChange={handleImagenChange} />

                        <button type="submit">Guardar</button>
                      </form>
                    </div>
                  )}
                </>
              )}
            {/*////////*/}

            <div class="card mb-3">
              <div class="card-header">
                <div class="card-actions float-right">
                  <div class="dropdown show">
                    <a href="#" data-toggle="dropdown" data-display="static">
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
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <h5 class="card-title mb-0">About</h5>
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
                      class="feather feather-name feather-sm mr-1"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>{" "}
                    Nombre <a href="#">{usuario.Nombre}</a>
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
                      class="feather feather-home feather-sm mr-1"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>{" "}
                    Lives in <a href="#">{usuario.Residencia}</a>
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
                    From <a href="#">{usuario.Origen}</a>
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
                      class="feather feather-phone feather-sm mr-1"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>{" "}
                    Teléfono <a>{usuario.telefono}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card mb-3">
              <div class="card-header">
                <div class="card-actions float-right">
                  <div class="dropdown show">
                    <a href="#" data-toggle="dropdown" data-display="static">
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
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <h5 class="card-title mb-0">Following</h5>
              </div>
              <div class="card-body">
                <div class="media">
                  <img
                    src="https://therichpost.com/wp-content/uploads/2021/03/avatar3.png"
                    width="56"
                    height="56"
                    class="rounded-circle mr-2"
                    alt="Andrew Jones"
                  />
                  <div class="media-body">
                    <p class="my-1">
                      <strong>Andrew Jones</strong>
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
                <div></div>

                {/*Publicaciones*/}
                {usuario.mascotas.map((mascota) => (
                  <div class="media" key={mascota.id}>
                    <img
                      src={usuario.foto_perfil}
                      width="56"
                      height="56"
                      class="rounded-circle mr-3"
                      alt={mascota.nombre}
                    />
                    <div class="media-body">
                      <p class="mb-2">
                        <strong>{usuario.usuario}</strong>
                      </p>
                      <p>{mascota.nombre}</p>
                      <p>{mascota.descripcion}</p>
                      <div class="row no-gutters mt-1">
                        <div class="col-6">
                          <Link to={`/mascota/${mascota.id}`}>
                            <img
                              src={mascota.imagen}
                              class="img-fluid pr-1"
                              alt="Unsplash"
                            />
                          </Link>
                        </div>
                      </div>
                      <small class="text-muted">Today 7:21 pm</small>
                      <br />
                      <a href="#" class="btn btn-sm btn-danger mt-1">
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
                    <a href="#" data-toggle="dropdown" data-display="static">
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
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <h5 class="card-title mb-0">Activities</h5>
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
                <a href="#" class="btn btn-primary btn-sm btn-block">
                  Load more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
