import { Dialog } from "@headlessui/react";
import React, { useCallback, useEffect, useState } from "react";
import Configuration from "types/Configuration";
import Modal from "components/atoms/Modal";

interface ConfigurationModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  config: Configuration;
  setConfig: (data: Configuration) => void;
}

export default function ConfigurationModal({
  open,
  setOpen,
  config,
  setConfig,
}: React.PropsWithChildren<ConfigurationModalProps>) {
  const [data, setData] = useState(config);

  useEffect(() => {
    setData(config);
  }, [config]);

  const setPosition = useCallback(
    (position: boolean) => setData((d) => ({ ...d, position })),
    []
  );

  const setDirt = useCallback(
    (index: number, hasDirt: boolean) =>
      setData((d) => {
        const dirt = [...d.dirt];
        dirt[index] = hasDirt;
        return { position: d.position, dirt, score: 0 };
      }),
    []
  );

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="sm:flex sm:items-start">
        {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div> */}
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            Generar Ambiente de pruebas
          </Dialog.Title>
          <div className="mt-2">
            <Dialog.Description
              as="h5"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              Posicion de aspiradora
            </Dialog.Description>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="position"
                id="left-vacuum"
                value="false"
                checked={!data.position}
                onChange={({ target }) => setPosition(!target.checked)}
              />
              <label
                htmlFor="left-vacuum"
                className="form-check-label inline-block text-gray-800"
              >
                Izquierda
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="position"
                id="right-vacuum"
                value="true"
                checked={data.position}
                onChange={({ target }) => setPosition(target.checked)}
              />
              <label
                htmlFor="right-vacuum"
                className="form-check-label inline-block text-gray-800"
              >
                Derecha
              </label>
            </div>
            <Dialog.Description
              as="h5"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              Posicion de tierra
            </Dialog.Description>
            <div className="form-check">
              <input
                type="checkBox"
                checked={data.dirt[0]}
                id="left-dirt"
                onChange={({ target }) => setDirt(0, target.checked)}
              />
              <label
                htmlFor="left-dirt"
                className="form-check-label inline-block text-gray-800 ml-1"
              >
                Izquierda
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkBox"
                id="right-dirt"
                name="right-dirt"
                checked={data.dirt[1]}
                onChange={({ target }) => setDirt(1, target.checked)}
              />
              <label
                htmlFor="right-dirt"
                className="form-check-label inline-block text-gray-800 ml-1"
              >
                Derecha
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => {
            setConfig(data);
            setOpen(false);
          }}
        >
          Siguiente
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
