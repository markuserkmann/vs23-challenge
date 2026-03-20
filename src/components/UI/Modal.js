import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, onClose, children }) => {
  const dialog = useRef();
  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    const modal = dialog.current;

    if (open && !modal.open) {
      modal.showModal();
    } else {
      modal.close();
    }

    return () => {
      if (modal.open) {
        modal.close();
      }
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose} onCancel={onClose}>
      {children}
    </dialog>,
    modalRoot,
  );
};

export default Modal;
