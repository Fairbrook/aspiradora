import React, { useState } from "react";
import "./App.css";
import ConfigurationModal from "components/molecules/ConfigurationModal";
import Scene from "components/organisms/Scene";
import Configuration from "types/Configuration";
import Enviroment from "types/Enviroment";
import delay from "utils/delay";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [config, setConfig] = useState<Configuration>({
    position: false,
    dirt: [],
    score: 0,
  });
  const [status, setStatus] = useState<string>("Inactivo");

  async function brain() {
    const enviroment = new Enviroment(config);
    setConfig(enviroment.copyConfig());
    if (enviroment.isDirty()) {
      setStatus("Aspirando");
      await delay();
      setConfig(enviroment.clean());
    }
    setStatus("Moviendose");
    await delay();
    setConfig(enviroment.move());
    if (enviroment.isDirty()) {
      setStatus("Aspirando");
      await delay();
      setConfig(enviroment.clean());
    }
    setStatus("Moviendose");
    await delay();
    setConfig(enviroment.move());
    setStatus("Listo");
  }

  return (
    <div className="App">
      <header className="App-header">
        <Scene config={config} status={status} />
        <div className="absolute bottom-3">
          <button
            className="bg-blue-500 rounded-sm p-3 mr-3"
            onClick={() => setOpen(true)}
          >
            Mostrar configuración
          </button>
          <button
            className="bg-green-600 rounded-sm p-3"
            onClick={() => brain()}
          >
            Empezar
          </button>
        </div>
      </header>
      <ConfigurationModal
        open={open}
        setOpen={setOpen}
        config={config}
        setConfig={setConfig}
      />
    </div>
  );
}

export default App;
