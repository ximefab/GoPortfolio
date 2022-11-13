import React from 'react';

import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import {BrowserRouter, Route, Routes, redirect} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Photography from './pages/Photography';
import Productions from './pages/Productions';
import GraphicDesign from './pages/GraphicDesign';
import DigitalAd from './pages/DigitalAd';
import About from './pages/About';

export const routes = {
  root: `/`,
  notfound: `*`,
  home: `/home`,
  div: `/div`,
};
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <main className="form-signin">
          <Routes>

            <Route path= "/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
           

            <Route path="/photography" element={<Photography />} />
            <Route path="/Productions" element={<Productions />} />
            <Route path="/graphicdesign" element={<GraphicDesign />} />
            <Route path="/digitalad" element={<DigitalAd />} />
          </Routes>
        

         
        </main>
      </BrowserRouter>



    </div>
  );
}

export default App;
