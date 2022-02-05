import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./Components/modal";

function App() {
  const [open, setOpen] = useState(true);
  const [posicionApiradora, setPosicionAspiradora] = useState(0);
  const [arrayTierra, setArrayTierra] = useState([true, false]);

  console.log(posicionApiradora);
  console.log(arrayTierra);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          className="bg-blue-500 rounded-sm p-3"
          onClick={() => setOpen(true)}
        >
          Mostrar configuracion
        </button>
      </header>
      <Modal
        open={open}
        setOpen={(value) => setOpen(value)}
        posicionAspiradora={posicionApiradora}
        setPosicionAspiradora={(value) => setPosicionAspiradora(value)}
        arrayTierra={arrayTierra}
        setArrayTierra={(value) => setArrayTierra(value)}
      />
    </div>
  );
}

export default App;
