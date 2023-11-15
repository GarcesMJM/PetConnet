import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Modal from 'react-modal';

const AdminPage = () => {
    // Estado para almacenar la información del usuario y si está autenticado
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
    const navigate = useNavigate();
    const [solicitudes, setSolicitudes] = useState(null);
    const [mostrarSolicitudes, setMostrarSolicitudes] = useState(false);


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

    useEffect(() => {
        const obtenerSolicitudes = async () => {
          try {
            const response = await fetch("http://localhost:5000/obtenersolicitudes", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
      
            const data = await response.json();
            setSolicitudes(data);
    
            console.log(data);
            // Aquí puedes actualizar el estado de tu componente con las publicaciones obtenidas
          } catch (error) {
            console.error(
              "Error al obtener las solicitudes:",
              error.response.data
            );
          }
        };
        obtenerSolicitudes();
      }, []);

    const handleClick2 = () => {
        setMostrarSolicitudes(!mostrarSolicitudes);
    };

    const aceptarSolicitud = async (usuarioo) => {
        try {
            const response = await fetch("http://localhost:5000/aceptarsolicitud", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({usuario:usuarioo, decision:true}),
                });
    
                const data = await response.json();
    
                console.log(data);

                setSolicitudes((prevSolicitudes) =>
                prevSolicitudes.filter((solicitud) => solicitud.usuario !== usuarioo)
                );
        } catch (error) {
          console.error(
            "Error al aceptar las solicitudes:",
            error.response.data
          );
        }
    };

    const rechazarSolicitud = async (usuarioo) => {
        try {
            const response = await fetch("http://localhost:5000/aceptarsolicitud", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({usuario:usuarioo, decision:false}),
                });
    
                const data = await response.json();
    
                console.log(data);

                setSolicitudes((prevSolicitudes) =>
                prevSolicitudes.filter((solicitud) => solicitud.usuario !== usuarioo)
                );
        } catch (error) {
          console.error(
            "Error al aceptar las solicitudes:",
            error.response.data
          );
        }
    };

    if(!usuarioAutenticado){
        return <div>Cargando...</div>;
      }

    if (!usuarioAutenticado.admin) {
       navigate(`/profile/${usuarioAutenticado.usuario}`, { replace: true });
      }

    return (
        solicitudes ? (
            <>
            <div>
            <h1>Panel de Administración</h1>
                <div>
                    {/*Seguidos*/}
                    <p onClick={handleClick2}>Ver solicitudes de Fundación</p>
                    <Modal
                        isOpen={mostrarSolicitudes}
                        onRequestClose={handleClick2}
                        contentLabel="Seguidores"
                        style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        content: {
                            width: '30%', // Ajusta el ancho según tus preferencias
                            height: '60%', // Ajusta la altura según tus preferencias
                            margin: 'auto',
                            borderRadius: '10px',
                            padding: '20px',
                            overflowY: 'auto' // Habilita la barra de desplazamiento vertical
                        }
                        }}
                    >
                        <h2 style={{ textAlign: 'center' }}>Solicitudes para ser Fundación</h2>
                        <hr />
                        {solicitudes.map((solicitud, index) => (
                        <div key={index} className="seguido">
                            <div>
                                <p>{solicitud.usuario}</p>
                                <p>{solicitud.fecha_hora}</p>
                                <button onClick={() => aceptarSolicitud(solicitud.usuario)} className="btn-aceptar">
                                    Aceptar
                                </button>
                                <button onClick={() => rechazarSolicitud(solicitud.usuario)} className="btn-rechazar">
                                    Rechazar
                                </button>
                                <Link to={`/profile/${solicitud.usuario}`} className="custom-link">
                                <button onClick className="btn-rechazar">
                                    Perfil
                                </button> 
                                </Link>
                            </div>
                            <hr/>
                        </div>
                        ))}
                        <button onClick={handleClick2} className="cerrar-modal">
                        x
                        </button>
                    </Modal>
                </div>
            </div>
        </>
        ) : null
    );
}


export default AdminPage;
