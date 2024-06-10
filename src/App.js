// App.jsx

import React, { useState, useEffect } from 'react';
import './App.css';
import Formulario from './views/Formulario';
import Listado from './views/Listado';

function App() {
  // Obtener las citas almacenadas del localStorage al cargar la página
  const citasGuardadas = JSON.parse(localStorage.getItem('citas'));
  const [citas, setCitas] = useState(citasGuardadas || []);

  // Guardar las citas en el localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

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
