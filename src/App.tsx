import React, { useState } from "react";
import "./App.css";
import ConfigurationModal from "components/molecules/ConfigurationModal";
import Scene from "components/organisms/Scene";
import useEnviroment from "hooks/useEnviroment";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const { config, score, setConfig, clean, move, isDirty } = useEnviroment();

  function brain() {
    if (isDirty()) clean();
    move();
    if (isDirty()) clean();
    move();
  }

  return (
    <div className="App">
      <header className="App-header">
        <Scene config={config} score={score} />
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
