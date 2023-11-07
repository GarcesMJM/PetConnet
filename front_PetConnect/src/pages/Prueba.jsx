import React from 'react';

function Prueba() {
  const handleClick = () => {
    const token = localStorage.getItem('token');

    if (token) {
      window.alert('Funciona');
    } else {
      window.alert('No logeado');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.alert('Has cerrado la sesión');
  };

  console.log('Local Storage:', localStorage); // Añadido para mostrar el Local Storage en la consola

  return (
    <div>
      <h1>Prueba</h1>
      <button onClick={handleClick}>
        Presiona aquí
      </button>
      <button onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Prueba;