import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Instituicoes from './pages/Instituicoes';
import Sobre from './pages/Sobre';
import Doar from './pages/Doar';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instituicoes" element={<Instituicoes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/doar" element={<Doar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;