import React, { useState, useEffect } from "react";
import "../styles/Modal.scss";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (formData: { name: string; time: string }) => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
  });

  useEffect(() => {
    if (show) {
      setFormData({
        name: "",
        time: "",
      });
    }
  }, [show]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Cadastrar Horário</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Horário:</label>
            <input
              type="text"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
