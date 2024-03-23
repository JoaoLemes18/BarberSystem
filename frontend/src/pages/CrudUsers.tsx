import React, { useState } from "react";
import "../styles/CrudUsers.scss";

import Button from "../components/Button";
import ListClients from "../components/ListClients";
import Modal from "../components/Modal";

interface Customer {
  id: number;
  name: string;
  time: string;
}

const customers: Customer[] = [
  { id: 1, name: "João", time: "11:50" },
  { id: 2, name: "Mateus", time: "11:50" },
  { id: 4, name: "Mateus", time: "11:50" },
  { id: 5, name: "João", time: "11:50" },
  { id: 6, name: "Mateus", time: "11:50" },
  { id: 7, name: "João", time: "11:50" },
  { id: 8, name: "Mateus", time: "11:50" },
  { id: 9, name: "João", time: "11:50" },
  { id: 10, name: "Mateus", time: "11:50" },
];

const CrudUsers: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id: number) => {
    console.log("Cliente excluído com o ID:", id);
  };

  const handleEdit = (id: number) => {
    console.log("Cliente editado com o ID:", id);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="container">
      <h1>Olá, Vini Malvadeza</h1>
      <div className="title-btn">
        <h2>Seus clientes de hoje!</h2>
        <Button content="Cadastrar Horario" onClick={toggleModal} />
      </div>
      <Modal show={showModal} onClose={toggleModal} />
      <ListClients
        customers={customers}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </section>
  );
};

export default CrudUsers;
