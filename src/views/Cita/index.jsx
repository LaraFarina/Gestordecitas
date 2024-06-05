import React from 'react';

function Cita({ cita, eliminarCita }) {
  const handleEliminar = () => {
    const confirmar = window.confirm('¿Estás seguro de eliminar esta cita?');
    if (confirmar) {
      eliminarCita(cita.id);
    }
  };

  return (
    <div className="cita">
      <p><strong>Nombre Mascota:</strong> {cita.nombreMascota}</p>
      <p><strong>Nombre Dueño:</strong> {cita.nombreDueño}</p>
      <p><strong>Fecha:</strong> {cita.fecha}</p>
      <p><strong>Hora:</strong> {cita.hora}</p>
      <p><strong>Síntomas:</strong> {cita.sintomas}</p>
      <button onClick={handleEliminar}>Eliminar</button>
    </div>
  );
}

export default Cita;
