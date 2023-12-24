import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css";
import Home from './components/Home/Home';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element = {<Home />}></Route>
    </Routes>
 </BrowserRouter>
);
