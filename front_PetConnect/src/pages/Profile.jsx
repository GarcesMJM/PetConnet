import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../css/Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-modal';

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
  const [mostrarSeguidores, setMostrarSeguidores] = useState(false);
  const [mostrarSeguidos, setMostrarSeguidos] = useState(false);
  const [mostrarSolicitud, setMostrarSolicitud] = useState(false);
  const [siguiendo, setSiguiendo] = useState(false);

  //BOTON////////////////////////////////////////////////////////////////////////////
  

  //OBTENER USUARIO DUEÑO DEL PERFIL/////////////////////////////////////////////////
  const obtenerUsuario = async () => {
    try {
      const response = await fetch("http://localhost:5000/usuariopornombre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      setUsuario((prevUsuario) => ({ ...prevUsuario, ...data }));
      console.log(data.seguidores);
      obtenerUsuarioAutenticado(data.seguidores);


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
    const obtenerUsuarioAutenticado = async (seguidores2) => {
        try {
        const response = await fetch('http://localhost:5000/usuariopornombre2', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: localStorage.getItem('token'), seguidores : seguidores2 }),
        });

        const data = await response.json();

        console.log(data.siguiendo);
        if (data.siguiendo){
          setSiguiendo(true);
        }

        setUsuarioAutenticado(prevUsuarioAutenticado => ({ ...prevUsuarioAutenticado, ...data }));
        } catch (error) {
        console.error('Error al obtener la información del usuario autenticado:', error.response.data);
        }
    };
  ///////////////////////////////////////////////////////////////////////////////////////

  const [edit, setEdit] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [nameuser, setNameuser] = useState("");
  const [lugarResidencia, setLugarResidencia] = useState("");
  const [lugarOrigen, setLugarOrigen] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState(null);

  const handleEditClick = () => {
    setButtonDisabled(true);
    setEdit(true);
  };

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

  ///SEGUIDORES Y SEGUIR///////////////////////////////////////////////////////
  const seguirUsuario = async () => {
    try {
      const response = await fetch("http://localhost:5000/agregarseguidor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario:usuario.usuario, seguidor:usuarioAutenticado.usuario }),
      });

      const data = await response.json()
      obtenerUsuario();
    
    } catch (error) {
      console.error(
        "Error al agregar seguidor",
        error.response.data
      );
    }
  };

  const eliminarseguidor = async () => {
    try {
      const response = await fetch("http://localhost:5000/eliminarseguidor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario:usuario.usuario, seguidor:usuarioAutenticado.usuario }),
      });

      const data = await response.json()
      obtenerUsuario();
    
    } catch (error) {
      console.error(
        "Error al agregar seguidor",
        error.response.data
      );
    }
  };
  
  const handleBotonSeguirClick = () => {
    if (!siguiendo) {
      setSiguiendo(true); // Cambiar el estado siguiendo a true
      seguirUsuario(); // Llamar a la función seguirUsuario
    }
    else{
      setSiguiendo(false);
      eliminarseguidor();
    }
  }

  const handleClick = () => {
    setMostrarSeguidores(!mostrarSeguidores);
  };

  const handleClick2 = () => {
    setMostrarSeguidos(!mostrarSeguidos);
  };

  const handleClick3 = () => {
    setMostrarSolicitud(!mostrarSolicitud);
  };
  ///////////////////////////////////////////////////////////////////////////////


  //SOLCITAR FUNDACION/////////////////////////////////////////////////////////
  const solicitarFundacion = async () => {
    try {
      const response = await fetch("http://localhost:5000/enviarsolicitudfundacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombreUsuario: usuario.usuario, // Reemplaza esto con el nombre de usuario
          fechaHora: new Date().toISOString(),
        }),
      });
  
      const data = await response.json();
  
      console.log(data);
    } catch (error) {
      console.error(
        "Error al solicitar la fundación:",
        error.response.data
      );
    }
  };

  //////////////////////////////////////////////////////////////////////////////


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

      // Añade la nueva mascota al estado de las mascotas
      obtenerUsuario();
      
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
     <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          PetConnect
        </a>
      </nav>
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
                <h4 class="card-title mb-2">{usuario.usuario}</h4>

                <div>
                  {/*Solo para visitante del perfil*/}
                  {usuarioAutenticado && usuarioAutenticado.usuario !== usuario.usuario && (
                    <>
                      {siguiendo ? (
                        <button class="btn btn-primary btn-sm" onClick={handleBotonSeguirClick}>
                          Siguiendo
                        </button>
                      ) : (
                        <button class="btn btn-primary btn-sm" onClick={handleBotonSeguirClick}>
                          Seguir
                        </button>
                      )}
                    </>
                  )}
                   {/*Solo para el dueño del perfil*/}
                    {usuarioAutenticado &&
                      usuarioAutenticado.usuario === usuario.usuario && (
                        <>
                  <a
                    class="btn btn-primary btn-sm mb-2"
                    href="/login"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </a>
                  </>
                      )}
                </div>
              </div>
            </div>

            {/*Solo para el dueño del perfil*/}
            {usuarioAutenticado &&
              usuarioAutenticado.usuario === usuario.usuario && (
                <>
                  <hr class="my-2" />
                  <div className="text-muted mb-2" onClick={handleEditClick}>
                    <button className="btn btn-light" disabled={buttonDisabled}>
                      Editar perfil
                    </button>
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
                    <button className="btn btn-light">Agregar mascota</button>
                  </div>
                  {mostrarPanel && (
                    <div>
                      <form onSubmit={handleSubmit}>
                        <input type="file" onChange={handleImagenChange} />
                        <input
                          type="text"
                          value={nombreMascota}
                          onChange={handleNombreChange}
                          placeholder="Nombre de la mascota"
                        />
                        <button type="submit">Guardar</button>
                      </form>
                    </div>
                  )}
                  <hr class="my-2" />
                  {usuarioAutenticado.fundacion!==2 && (
                  <>
                  {/*Fundación*/}
                  <div>
                    <div
                      className="text-muted mb-2"
                      onClick={() => {
                        handleClick3();
                        if (usuario.fundacion === 0) {
                          usuario.fundacion=1;                        
                          solicitarFundacion();
                        }
                      }}
                    >
                      <button className="btn btn-light">Quiero ser Fundación</button>
                      <Modal
                        isOpen={mostrarSolicitud}
                        onRequestClose={handleClick3}
                        contentLabel="Seguidores"
                        style={{
                          overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                          },
                          content: {
                            width: '20%', // Ajusta el ancho según tus preferencias
                            height: '20%', // Ajusta la altura según tus preferencias
                            margin: 'auto',
                            borderRadius: '10px',
                            padding: '20px',
                            overflowY: 'auto' // Habilita la barra de desplazamiento vertical
                          }
                        }}
                      >
                        <h2 style={{ textAlign: 'center' }}>Estado de Solicitud</h2>
                        <hr />
                        {usuario.fundacion === 1 ? (
                          <p>La solicitud se encuentra en revisión</p>
                        ) : null}
                        {usuario.fundacion === 0 ? (
                          <p>Solicitud enviada</p>
                        ) : null}
                        {usuario.fundacion === 4 ? (
                          <p>Solicitud rechazada</p>
                        ) : null}
                        <button onClick={handleClick3} className="cerrar-modal">
                          x
                        </button>
                      </Modal>
                    </div>
                  </div>
                  </>
                  )}
                </>
              )}
              {usuario.fundacion===2 && (
                  <> 
                    <hr class="my-2" />
                    <p>Fundación Verificada</p>
                  </>
                  )}
            {/*////////*/}

            <div class="card mb-3">
              <div class="card-header">
                <div class="card-actions float-right">
                  <div class="dropdown show">
                    <a data-toggle="dropdown" data-display="static">
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
                <h5 class="card-title mb-0">Más información</h5>
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
                    Residencia:<br/> <a>{usuario.Residencia}</a>
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
                    Contacto: <br/> <a>{usuario.telefono}</a>
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
                    Origen: <br/><a>{usuario.Origen}</a>
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
                    Contacto: <br/><a>{usuario.email}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card mb-3">
              <div class="card-header">
                <div class="card-actions float-right">
                  <div class="dropdown show">
                    <a data-toggle="dropdown" data-display="static">
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
                  </div>
                </div>
                <h5 class="card-title mb-0">Conexiones</h5>
              </div>
              <div class="card-body">
              <div>
                {/*Seguidores*/}
                <p onClick={handleClick}>{usuario.seguidores.length} seguidores</p>
                <Modal
                  isOpen={mostrarSeguidores}
                  onRequestClose={handleClick}
                  contentLabel="Seguidores"
                  style={{
                    overlay: {
                      backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    content: {
                      width: '20%', // Ajusta el ancho según tus preferencias
                      height: '60%', // Ajusta la altura según tus preferencias
                      margin: 'auto',
                      borderRadius: '10px',
                      padding: '20px',
                      overflowY: 'auto' // Habilita la barra de desplazamiento vertical
                    }
                  }}
                >
                  <h2 style={{ textAlign: 'center' }}>Seguidores</h2>
                  <hr />
                  {usuario.seguidores.map((seguidor, index) => (
                    <div key={index} className="seguidor">
                      <img
                        src={seguidor.foto_perfil}
                        width="56"
                        height="56"
                        className="rounded-circle mr-3"
                      />
                      <p>{seguidor.usuario}</p>
                    </div>
                  ))}
                  <button onClick={handleClick} className="cerrar-modal">
                    x
                  </button>
                </Modal>
              </div>

              <div>
                {/*Seguidos*/}
                <p onClick={handleClick2}>{usuario.seguidos.length} seguidos</p>
                <Modal
                  isOpen={mostrarSeguidos}
                  onRequestClose={handleClick2}
                  contentLabel="Seguidores"
                  style={{
                    overlay: {
                      backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    content: {
                      width: '20%', // Ajusta el ancho según tus preferencias
                      height: '60%', // Ajusta la altura según tus preferencias
                      margin: 'auto',
                      borderRadius: '10px',
                      padding: '20px',
                      overflowY: 'auto' // Habilita la barra de desplazamiento vertical
                    }
                  }}
                >
                  <h2 style={{ textAlign: 'center' }}>Seguidos</h2>
                  <hr />
                  {usuario.seguidos.map((seguido, index) => (
                    <div key={index} className="seguido">
                      <img
                        src={seguido.foto_perfil}
                        width="56"
                        height="56"
                        className="rounded-circle mr-3"
                      />
                      <p>{seguido.usuario}</p>
                    </div>
                  ))}
                  <button onClick={handleClick2} className="cerrar-modal">
                    x
                  </button>
                </Modal>
              </div>
              </div>
              {/*Seguidos*/}
            </div>
          </div>

          {/*Feed*/}
          <div class="col-12 col-lg-8 col-xl-6 order-1 order-lg-2">
            <div class="card">
              <div class="card-body h-100">
                <div></div>

                {/*Publicaciones*/}
                {usuario.mascotas.slice().reverse().map((mascota) => (
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
                    <small class="float-right text-navy">Hace 5min </small>
                    <strong>Jassa Jas</strong> siguió a{" "}
                    <strong>Marie Salter</strong>
                    <br />
                    <small class="text-muted">Hoy 7:51 pm</small>
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

export default Profile;