import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="top">
      <div className="conteiner">
        <div className="logo">
          <img src="/logo.png" alt="Logo da ONG" className="logo-img" />
        </div>
        <nav className="menu">
          <Link to="/sobre">Sobre</Link>
          <Link to="/instituicoes">Instituições</Link>
          <Link to="/doar">Doe Agora</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;