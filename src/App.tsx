import React, { useState } from "react";
import "./App.css";
import Configuration from "types/Configuration";
import ConfigurationModal from "components/molecules/ConfigurationModal";
import Scene from "components/organisms/Scene";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [config, setConfig] = useState<Configuration>({
    position: false,
    dirt: [],
  });

  return (
    <div className="App">
      <header className="App-header">
        <Scene config={config} />
        <button
          className="bg-blue-500 rounded-sm p-3 absolute bottom-3"
          onClick={() => setOpen(true)}
        >
          Mostrar configuracion
        </button>
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
