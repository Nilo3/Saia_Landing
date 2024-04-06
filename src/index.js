import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css";
import Home from './views/Home/Home';
import NavBar from './components/NavBar';
import Team from './views/Team/Team';
import Footer from './components/Footer';
import Press from './views/Press/Press';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <NavBar />
  <div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Equipo" element={<Team />}></Route>
      <Route path="/Prensa" element={<Press />}></Route>
    </Routes>
    <Footer />
  </div>
 </BrowserRouter>
);