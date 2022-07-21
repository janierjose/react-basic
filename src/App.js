import "./App.css";

// components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Presentation from "./components/Presentation";

function App() {
  return (
    <>
      <Header
        title="Header"
        name="Janier"
        edad={27}
        person={{ name: "Janier", age: 27, email: "janier@gmail.com" }} // pasar props al components
      />
      <Main />
      <Presentation
        person={{
          nombre: "Janier",
          age: 27,
          email: "janier@gmail.com",
          casado: true,
        }}
        hobbis={["Programar", "Leer", "Trabajar"]}
      />
    </>
  );
}

export default App;
