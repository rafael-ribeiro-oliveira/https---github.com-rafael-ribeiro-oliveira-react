import './App.css';
import MyComponent from './components/MyComponent';

import { useState } from "react";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Matheus");

  const redTitle = true;
  // quando for false a classe dinâmica altera utilizando o title
  // const redTitle = false;
  return (
    <div className="App">
      {/*CSS global*/}
      <h1>React com CSS</h1>
      {/*CSS de componente*/}
      <MyComponent />
      <p>Este paragráfo é do App.js</p>
      {/*Inline CSS*/}
      <p style={{
        color: "blue", 
        padding: "25px", 
        borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      <p style={{
        color: "blue", 
        padding: "25px", 
        borderTop: "2px solid red"
        }}
      > 
        Este elemento foi estilizado de forma inline
      </p>
      {/*CSS Inline Dinâmico*/}
      <h2 style={n < 10 ? { color: "purple"} : { color: "violet"}}>
        CSS dinâmico
        </h2>
        <h2 style={n > 10 ? { color: "purple"} : { color: "violet"}}>
        CSS dinâmico
        </h2>
        <h2 
          style={
            name === "Matheus" 
              ? { color: "red", background: "#000"}
              : null 
          }
        >
        Teste nome
        </h2>
        {/*Classe dinâmics*/}
        <h2 className={redTitle ? "red-title" : "title"}>
          Este título vai ter classe dinâmica
        </h2>
        {/*CSS Modules*/}
        <Title />
        {/*Não irá receber o css da my_title porque ela é escopo
        ou seja só funciona para aquele arquivo em si*/}
        <h2 className='my_title'>Testando</h2>
    </div>
  );
}

export default App;
