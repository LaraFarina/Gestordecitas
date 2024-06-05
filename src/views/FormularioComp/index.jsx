import React from 'react';

function FormularioComponente({ nombreMascota, nombreDueño, fecha, hora, sintomas, error, setNombreMascota, setNombreDueño, setFecha, setHora, setSintomas, handleSubmit }) {
  return (
    <div className="formulario">
      <h2>ADMINISTRADOR DE PACIENTES</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={nombreMascota} onChange={(e) => setNombreMascota(e.target.value)} placeholder="Nombre Mascota" required />
        <input type="text" value={nombreDueño} onChange={(e) => setNombreDueño(e.target.value)} placeholder="Nombre Dueño" required />
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
        <textarea value={sintomas} onChange={(e) => setSintomas(e.target.value)} placeholder="Síntomas" required />
        <button type="submit">AGREGAR CITA</button>
      </form>
    </div>
  );
}

export default FormularioComponente;
