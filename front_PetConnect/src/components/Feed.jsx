import React, { useState, useEffect } from "react";

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

export default function Feed( ) {

  const [publicaciones, setPublicaciones] = useState(null);

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      try {
        const response = await fetch("http://localhost:5000/obtenerpublicaciones", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
        setPublicaciones(data);

        console.log(data);
        // Aquí puedes actualizar el estado de tu componente con las publicaciones obtenidas
      } catch (error) {
        console.error(
          "Error al obtener las publicaciones:",
          error.response.data
        );
      }
    };
    obtenerPublicaciones();
  }, []);
  

  return (
    //publicaciones
    publicaciones ? (
      <>
        {publicaciones.map((publicacion) => (
          <div className="card gedf-card" key={publicacion.id}>
            <div className="card-header">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mr-2">
                    <img
                      className="rounded-circle"
                      width="45"
                      src={publicacion.foto_perfil}
                      alt=""
                    />
                  </div>
                  <div className="ml-2">
                    <div className="h5 m-0">{publicacion.nombre}</div>
                    <div className="h7 text-muted">@{publicacion.usuario}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="text-muted h7 mb-2">
                {" "}
                <i className="fa fa-clock-o"></i> {publicacion.fecha}
              </div>
                <p>{publicacion.descripcion}</p>
              <img src={publicacion.imagen} alt="Imagen" />
            </div>
            <div className="card-footer">
              <a href="#" className="card-link">
                <i className="fa fa-gittip"></i> Like
              </a>
              <a href="#" className="card-link">
                <i className="fa fa-comment"></i> Comment
              </a>
              <a href="#" className="card-link">
                <i className="fa fa-mail-forward"></i> Share
              </a>
            </div>
          </div>
        ))}
      </>
    ) : null
  );
  
}
