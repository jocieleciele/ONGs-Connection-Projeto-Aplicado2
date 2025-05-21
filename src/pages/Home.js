import React, { useState } from 'react';

function Home() {
  const [form, setForm] = useState('');

  const toggleForm = (type) => {
    setForm((prev) => (prev === type ? '' : type));
  };

  return (
    <div className="secao">
      <div className="botoes-cadastro">
        <button onClick={() => toggleForm('doador')}>Cadastro do Doador</button>
        <button onClick={() => toggleForm('instituicao')}>Cadastro da Instituição</button>
        <button onClick={() => toggleForm('voluntario')}>Cadastro de Voluntário</button>
      </div>

      {form === 'doador' && (
        <form className="formulario">
          <h2>Cadastro de Doador</h2>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Tipo de Doação" required />
          <textarea placeholder="Descrição" required></textarea>
          <label>Forma de Pagamento:</label>
          <select required>
            <option value="">Selecione</option>
            <option value="pix">PIX</option>
            <option value="boleto">Boleto</option>
            <option value="cartao">Cartão de Crédito</option>
            <option value="transferencia">Transferência Bancária</option>
          </select>
          <button type="submit">Enviar</button>
        </form>
      )}
      {form === 'instituicao' && (
        <form className="formulario">
          <h2>Cadastro de Instituição</h2>
          <input type="text" placeholder="Nome da Instituição" required />
          <input type="text" placeholder="Responsável" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="CNPJ" />
          <textarea placeholder="Descrição" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      )}
      {form === 'voluntario' && (
        <form className="formulario">
          <h2>Cadastro de Voluntário</h2>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Área de Interesse" />
          <input type="text" placeholder="Dias Disponíveis" />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}

export default Home;