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

  async function brain() {
    const enviroment = new Enviroment(config);
    if (enviroment.isDirty()) {
      enviroment.clean();
      await delay();
      setConfig({ ...enviroment.config });
    }
    enviroment.move();
    await delay();
    setConfig({ ...enviroment.config });
    if (enviroment.isDirty()) {
      enviroment.clean();
      await delay();
      setConfig({ ...enviroment.config });
    }
    enviroment.move();
    await delay();
    setConfig({ ...enviroment.config });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Scene config={config} />
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
