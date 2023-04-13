import React, { useState } from "react";
import "./App.css";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showHideClassName = isOpen ? "modal d-block" : "modal d-none";

  const modal = (
    <div className={showHideClassName}>
      <div className="modal-container">
        <h2>Hello Modal</h2>
        <div className="form-group">
          <label>Hello</label>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} type="button">
          close
        </button>
      </div>
    </div>
  );

  return { isOpen, setIsOpen, modal };
};

export default function App() {
  const { modal, isOpen, setIsOpen } = useModal();
  const onOpenModal = () => setIsOpen(true);
  return (
    <div className="container">
      <div>Welcome</div>
      <div onClick={onOpenModal}>Open modal</div>
      {modal}
    </div>
  );
}
