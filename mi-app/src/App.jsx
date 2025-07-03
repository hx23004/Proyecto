import Saludo from "./components/Saludo";
import Contador from "./components/contador";
import Boton from "./components/Boton";
import ContadorConEfecto from "./components/ContadorConEfecto";

function App() {
  return (
    <div>
      <Saludo nombre={"Alumno"} />
      <Contador />
      <Boton />
      <ContadorConEfecto />
    </div>
  );
}

export default App;
