import React, { useState } from 'react';

const FormularioContato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/enviar-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (response.ok) {
        console.log('E-mail enviado com sucesso!');
      } else {
        console.error('Erro ao enviar o e-mail.');
      }
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Mensagem:
        <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioContato;
