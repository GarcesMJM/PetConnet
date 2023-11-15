import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const AdminPage = () => {
    // Estado para almacenar la información del usuario y si está autenticado
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
    const navigate = useNavigate();

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

    if(!usuarioAutenticado){
        return <div>Cargando...</div>;
      }

    if (!usuarioAutenticado.admin) {
       navigate(`/profile/${usuarioAutenticado.usuario}`, { replace: true });
      }

    return (
        <div>
        <h1>Panel de Administración</h1>
        {/* Agrega contenido específico del panel de administración */}
        </div>
    );
    }


export default AdminPage;
