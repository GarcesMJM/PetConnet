import React from "react";

export default function Leftsidebar() {
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
          <div className="h5">Número</div>
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
