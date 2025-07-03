import { useState } from "react";

function Boton() {
  const [mensaje, setMensaje] = useState("Haz click en el boton");

  function manejarClick() {
    setMensaje("Boton clickeado!");
  }

  return (
    <div>
      <p>{mensaje}</p>
      <button onClick={manejarClick}>Click aqui</button>
    </div>
  );
}

export default Boton;
