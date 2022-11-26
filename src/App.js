import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Inicio from './routes/Inicio'
import Menu from './routes/Menu'
import Ubicacion from './routes/Ubicacion';
import Contacto from './routes/Contacto';
import PageNotFound from './routes/PageNotFound';
import NotFound from './routes/NotFound';
import './App.css';




function App() {
  return (
          <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/404' element={<PageNotFound/>} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Ubicacion' element={<Ubicacion />} />
        <Route path='/Contacto' element={<Contacto />} />
    </Routes>
  );
}

export default App;

