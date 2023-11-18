import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home/Home';
import ToDo from './Todo/ToDo';
import Detalhe from './detalhe/detalhe';
import ReaCte from './React/Reacty';
import Card from './componente/card';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/todo' element={<ToDo />}></Route>
        <Route path='/detalhe/:id' element={<Detalhe />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Trabalho' element={<ReaCte />}></Route>
        <Route path='/card' element={<Card/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
