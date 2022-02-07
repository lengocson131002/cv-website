import { createContext, useState } from "react"

const ModalContext = createContext();

const ModalProvider = ({ children }) => {

  const [context, setContext] = useState({
    isOpen: false,
    project: {}
  });
  const closeModal = () => {
    setContext({
      isOpen: false,
      project: {}
    });
  }

  const openModal = (project) => {
    setContext({
      isOpen: true,
      project: project
    });
  }
  return <ModalContext.Provider
    value={{ context, closeModal, openModal }}
  >{children}</ModalContext.Provider>
}

export { ModalProvider, ModalContext };

