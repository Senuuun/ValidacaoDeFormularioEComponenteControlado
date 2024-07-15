import React, { useState } from 'react';

const InputControlado = () => {
  const [textoDigitado, setTextoDigitado] = useState('');

  const handleChange = (e) => {
    setTextoDigitado(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={textoDigitado}
        onChange={handleChange}
        placeholder="Digite algo..."
      />
      <p>Texto digitado: {textoDigitado}</p>
    </div>
  );
};

export default InputControlado;