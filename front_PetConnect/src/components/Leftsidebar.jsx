import React, { useState, useEffect } from "react";

const LeftSidebar = () => {
  const [totalUsuarios, setTotalUsuarios] = useState(null);

  useEffect(() => {
    const obtenerTotalUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:5000/obtenertotalusuarios");
        const data = await response.json();
        setTotalUsuarios(data.totalUsuarios);
      } catch (error) {
        console.error('Error al obtener el número total de usuarios:', error);
      }
    };

    obtenerTotalUsuarios();
  }, []);

  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <div className="h5">Explora nuestras Publicaciones</div>
            <div className="h7">
              Descubre historias conmovedoras de adopciones exitosas, consejos esenciales para el cuidado de mascotas y las últimas noticias sobre protección animal.            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="h5">Alertas de Mascotas Perdidas</div>
              <div className="h7">
              Contribuye a reunir familias perdidas. Mantente informado sobre alertas de mascotas extraviadas y únete a la búsqueda para asegurar su regreso a casa.</div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="h5">Comentarios Conmovedores</div>
              <div className="h7">
              Lee los Comentarios inspiradores de adoptantes felices y descubre cómo la adopción ha transformado la vida de estas mascotas y sus dueños.</div>
            </div>
          </div>
        </div>

        <div className="card mt-4">
          <div className="card-body">
            <div className="h6 text-muted">Usuarios Totales</div>
            <div className="h5">{totalUsuarios}</div>
          </div>
        </div>

      <div className="card">
        <div className="card-body">
          <div className="h6 text-muted">Mascotas Totales</div>
          <div className="h5">Número</div>
        </div>
      </div>

      </div>

    </>
  );
}

export default LeftSidebar;
