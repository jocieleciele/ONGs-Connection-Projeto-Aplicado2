import React from 'react';

function Footer() {
  return (
    <footer className="rodape">
      <div className="conteiner">
        <div className="contato">
          <h2>Contato</h2>
          <p>WhatsApp: <a href="https://wa.me/5599999999999">+55 99 99999-9999</a></p>
          <p>Email: <a href="mailto:contato@ongexemplo.org">contato@ongexemplo.org</a></p>
          <p>Instagram: <a href="https://instagram.com/ongexemplo">@ongexemplo</a></p>
          <p>Facebook: <a href="https://facebook.com/ongexemplo">/ongexemplo</a></p>
        </div>
        <div className="mapa">
          <h2>Local para Doações</h2>
          <iframe src="https://www.google.com/maps/embed?..." width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
          <p>Agrolândia, SC, CEP 88420-000, Rua Paraíso nº XXX</p>
        </div>
      </div>
      <div className="copy">
        &copy; 2025 ONG Exemplo. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;