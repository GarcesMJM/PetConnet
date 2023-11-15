import React from "react";

export default function Rightsidebar() {
  return (
    <>
      <div className="col-md-3">
        <div className="card gedf-card">
          <div className="card-body">
            <h5 className="card-title">Visita una mascota</h5>
            <h6 className="card-subtitle mb-2 text-muted">Aleatoriamente</h6>
            <p className="card-text">
            Presiona el botón para conocer una mascota aleatoria
            </p>
            <button><a href className="card-link">
              Card link
            </a></button>
          </div>
        </div>
      </div>
    </>
  );
}
