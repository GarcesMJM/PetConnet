import React, { useState, useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom';

const RightSidebar = () => {
  const [mascotaAleatoria, setMascotaAleatoria] = useState(null);
  const navigate = useNavigate();

  const cargarMascotaAleatoria = async () => {
    try {
      const response = await fetch('http://localhost:5000/obtenerMascotaAleatoria');
      
      if (!response.ok) {
        throw new Error('Error al obtener una mascota aleatoria');
      }

      const data = await response.json();
      setMascotaAleatoria(data);
    } catch (error) {
      console.error('Error al obtener una mascota aleatoria:', error.message);
    }
  };

  const redirectToPerfilMascota = () => {
    if (mascotaAleatoria) {
      const perfilURL = `/mascota/${mascotaAleatoria.id}`;
      console.log('Redirigiendo a:', perfilURL);
      navigate(perfilURL);
    }
  };

  useEffect(() => {
    cargarMascotaAleatoria();
  }, []);

  return (
    <div className="col-md-3">
      <div className="card gedf-card">
        <div className="card-body">
          <h5 className="card-title">Visita una mascota</h5>
          <h6 className="card-subtitle mb-2 text-muted">Aleatoriamente</h6>
          {mascotaAleatoria && (
            <>
              <img src={mascotaAleatoria.imagen} alt={mascotaAleatoria.nombre} />
              <p className="card-text">{mascotaAleatoria.nombre}</p>
              {/* Botón para redirigir al perfil de la mascota aleatoria */}
              <Link to={`/mascota/${mascotaAleatoria.id}`} className="btn btn-primary">
                Ver perfil
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
