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
import Works from './pages/Works';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <main className="form-signin">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/works/photography" element={<Photography />} />
            <Route path="/works/Productions" element={<Productions />} />
            <Route path="/works/graphicdesign" element={<GraphicDesign />} />
            <Route path="/works/digitalad" element={<DigitalAd />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        

         
        </main>
      </BrowserRouter>



    </div>
  );
}

export default App;
