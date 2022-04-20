import React, { Fragment } from "react";
import "./modal.css";

const Modal = ({ show, children, onClose }) => {
    return (
        <Fragment>
            {show ? <div class="modal">
                <h2>Modal Window</h2>
                <div class="content">{children}</div>
                <div class="actions">
                    <button class="toggle-button" onClick={(e) => onClose(e)}>
                        Close
                    </button>
                </div>
            </div> : null}
        </Fragment>
    );
}

export default Modal