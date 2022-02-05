/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

type ModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  posicionAspiradora: number;
  setPosicionAspiradora: (posicion: number) => void;
  arrayTierra: Array<boolean>;
  setArrayTierra: (arrayDeTierra: Array<boolean>) => void;
};

export default function Modal({
  open,
  setOpen,
  posicionAspiradora,
  setPosicionAspiradora,
  arrayTierra,
  setArrayTierra,
}: ModalProps) {
  const cancelButtonRef = useRef(null);

  const [modalPosicionApiradora, setModalPosicionAspiradora] = useState(0);
  const [modalArrayTierra, setModalArrayTierra] = useState([false, false]);

  function setTierra(posicion: number, valor: boolean) {
    let copyModalArrayTierra = [...modalArrayTierra];
    copyModalArrayTierra[posicion] = valor;
    setModalArrayTierra(copyModalArrayTierra);
  }

  function setValues() {
    setPosicionAspiradora(modalPosicionApiradora);
    setArrayTierra(modalArrayTierra);
    setOpen(false);
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
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
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value={0}
                          checked={modalPosicionApiradora === 0}
                          onClick={() => setModalPosicionAspiradora(0)}
                        />
                        <label className="form-check-label inline-block text-gray-800">
                          Izquierda
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value={1}
                          checked={modalPosicionApiradora === 1}
                          onClick={() => setModalPosicionAspiradora(1)}
                        />
                        <label className="form-check-label inline-block text-gray-800">
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
                          checked={modalArrayTierra[0]}
                          onChange={(e) => setTierra(0, e.target.checked)}
                        />
                        <label className="form-check-label inline-block text-gray-800">
                          Izquierda
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkBox"
                          checked={modalArrayTierra[1]}
                          onChange={(e) => setTierra(1, e.target.checked)}
                        />
                        <label className="form-check-label inline-block text-gray-800">
                          Derecha
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setValues()}
                >
                  Siguiente
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
