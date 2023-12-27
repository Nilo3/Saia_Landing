import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css";
import Home from './views/Home/Home';
import NavBar from './components/NavBar';
import Register from './views/Register/Register';
import Login from './views/Register/Login';
import Contact from './views/Contact/Contact'
import Ranking from './views/Ranking/Ranking';
import Trivia from './views/Trivia/Trivia';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element = {<Home />}></Route>
      <Route path="/Registro" element = {<Register />}></Route> 
      <Route path="/Ingresar" element = {<Login />}></Route> 
      <Route path="/Contactanos" element = {<Contact />}></Route> 
      <Route path="/Ranking" element = {<Ranking />}></Route> 
      <Route path="/Trivia" element = {<Trivia />}></Route> 
    </Routes>
 </BrowserRouter>
);
