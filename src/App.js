import React from 'react';
import './App.css';
import Formulario from './Formulario';
import InputControlado from './InputControlado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu Aplicativo React</h1>
      </header>
      <main>
        <div className="container">
          <Formulario />
          <hr />
          <h2>Input Controlado</h2>
          <InputControlado />
        </div>
      </main>
    </div>
  );
}

export default App;