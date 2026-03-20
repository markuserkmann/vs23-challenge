import { useEffect, useRef } from "react";

const Modal = ({ open, children }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (!modal) {
      return;
    }

    if (open) {
      modal.showModal();
    } else if (modal.open) {
      modal.close();
    }

    return () => {
      if (modal.open) {
        modal.close();
      }
    };
  }, [open]);

  return (
    <dialog ref={dialog} className="modal">
      {children}
    </dialog>
  );
};

export default Modal;
