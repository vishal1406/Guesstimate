import { Fragment, ReactNode, MouseEvent } from "react";
import "./modal.css";

interface ModalProps {
  show: boolean;
  children: ReactNode;
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Modal = ({ show, children, onClose }: ModalProps) => {
  return (
    <Fragment>
      {show && (
        <div className="modal">
          <h2>Modal Window</h2>
          <div className="content">{children}</div>
          <div className="actions">
            <button className="toggle-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
