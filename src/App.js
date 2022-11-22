import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Inicio from './routes/Inicio'
import Menu from './routes/Menu'
import Reservas from './routes/Reservas';
import Contacto from './routes/Contacto';
import './App.css';




function App() {
  return (
          <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Reservas' element={<Reservas />} />
        <Route path='/Contacto' element={<Contacto />} />
    </Routes>
  );
}

export default App;

