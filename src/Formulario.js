import React, { useState, useEffect } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    idade: ''
  });

  const [formPreenchido, setFormPreenchido] = useState(false);

  useEffect(() => {
    // Verifica se todos os campos do formulário estão preenchidos
    const isFormValido = Object.values(formulario).every((valor) => valor !== '');
    setFormPreenchido(isFormValido);
  }, [formulario]);

  const handleChange = (campo, valor) => {
    setFormulario({
      ...formulario,
      [campo]: valor
    });
  };

  const { nome, email, idade } = formulario;

  return (
    <div className="formulario-container">
      <h2>Formulário</h2>
      <div className="form-group">
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => handleChange('nome', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Idade:</label>
        <input
          type="number"
          value={idade}
          onChange={(e) => handleChange('idade', e.target.value)}
        />
      </div>

      {formPreenchido && (
        <p>Formulário preenchido!</p>
      )}
    </div>
  );
};

export default Formulario;