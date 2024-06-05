import React from 'react';

function Listado({ citas, eliminarCita }) {
  const handleEliminar = (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar esta cita?');
    if (confirmar) {
      eliminarCita(id);
    }
  };

  return (
    <div className="listado">
      <h2>Listado de Citas</h2>
      <ul>
        {citas.map(cita => (
          <li key={cita.id}>
            <p><strong>Nombre Mascota:</strong> {cita.nombreMascota}</p>
            <p><strong>Nombre Dueño:</strong> {cita.nombreDueño}</p>
            <p><strong>Fecha:</strong> {cita.fecha}</p>
            <p><strong>Hora:</strong> {cita.hora}</p>
            <p><strong>Síntomas:</strong> {cita.sintomas}</p>
            <button onClick={() => handleEliminar(cita.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listado;
