import { useEffect } from "react";
import { createPortal } from "react-dom";

const myModal = document.getElementById("modal-root");

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleClose);
    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, []);

  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
    if (event.key === "Escape") {
      closeModal();
    }
  };
  return createPortal(
    <div onClick={handleClose} className="Overlay">
      <div className="Modal">{children}</div>
    </div>,
    myModal
  );
};

export default Modal;
