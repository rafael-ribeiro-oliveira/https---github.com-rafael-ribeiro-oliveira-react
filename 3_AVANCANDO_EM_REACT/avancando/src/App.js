import { Fragment, useState } from "react";
import "./App.css";

import luz from "./assets/luz.jpg";
import CarDetails from "./components/CarDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import MessageState from "./components/MessageState";
import ShowUserName from "./components/ShowUserName";

function App() {
  // Valores diretos, valores por variável e valores por state.
  //  const name = "Joaquim;"
  //  const [userName] = useState("Maria");

    const cars = [
      { id: 1, brand: "Ferrari", km: 0, color: "Amarelo", newCar: true },
      { id: 2, brand: "ia", km: 15115, color: "Branco", newCar: false },
      { id: 3, brand: "Renault", km: 200, color: "Rosa", newCar: false }
    ]

    function showMessage() {
      console.log("Evento do componente pai");
    };
  
    const [message, setMessage] = useState("");
  
    const handleMessage = (msg) => {
      setMessage(msg);
    };

 return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img.jpg" alt="Luz" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={luz} alt="Luz" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      {/* <ShowUserName name="Joaquim "}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={10000000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={500} color="Branco" newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar} 
        />
      ))};

       {/* fragments */}
      <Fragment>
        Teste
      </Fragment> 
      {/* children prop */}
      <Container myValue="testing">
        <p>Eu sou do componente superior</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      <Container>
        <div>
          <p>Eu também</p>
        </div>
      </Container>
      {/* event as prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <MessageState msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
};

export default App;
