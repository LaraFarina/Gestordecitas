import React, { useState } from 'react';
import './App.css';
import Formulario from '././views/Formulario';
import Listado from '././views/Listado';

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <div className="App">
      <Formulario agregarCita={agregarCita} />
      <Listado citas={citas} eliminarCita={eliminarCita} />
    </div>
  );
}

export default App;
