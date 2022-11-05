import React from 'react';

import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Photography from './pages/Photography';

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
            <Route path="/contact" element={<Contact />} />
            <Route path="/photography" element={<Photography />} />
        
          </Routes>
        

         
        </main>
      </BrowserRouter>



    </div>
  );
}

export default App;
