import React from "react";

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h1>Conteúdo do componente pai:</h1>
      {children}
      <p>o valor é: {myValue}</p>
    </div>
  );
};

export default Container;