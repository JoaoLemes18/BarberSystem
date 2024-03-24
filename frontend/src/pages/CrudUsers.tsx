import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/CrudUsers.scss";

import Button from "../components/Button";
import ListClients from "../components/ListClients";
import Modal from "../components/Modal";

// Importando os ícones para as notificações
import { TiDeleteOutline } from "react-icons/ti";

interface Customer {
  id: number;
  name: string;
  time: string;
}

const customers: Customer[] = [
  { id: 1, name: "João", time: "11:50" },
  { id: 2, name: "Mateus", time: "11:50" },
  { id: 4, name: "Mateus", time: "11:50" },
];

const CrudUsers: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [clientList, setClientList] = useState<Customer[]>(customers);
  const [selectedClient, setSelectedClient] = useState<Customer | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Função para remover um cliente da lista
  const handleDelete = (id: number): void => {
    const updatedClients: Customer[] = clientList.filter(
      (client) => client.id !== id
    );
    setClientList(updatedClients);
    toast.success("Cliente excluído com sucesso!", {
      // Personalizando o ícone da notificação
      icon: <TiDeleteOutline />,
    });
  };

  // Função para abrir o modal de cadastro
  const handleAdd = (): void => {
    setSelectedClient(null);
    setIsEditing(false);
    setShowModal(true);
  };

  const handleEdit = (id: number, _name: string, _time: string): void => {
    const selected: Customer | undefined = clientList.find(
      (client) => client.id === id
    );
    if (selected) {
      setSelectedClient(selected);
      setIsEditing(true);
      setShowModal(true);
    }
  };

  const handleSave = (formData: { name: string; time: string }): void => {
    if (isEditing && selectedClient) {
      const updatedClientList: Customer[] = clientList.map((client) =>
        client.id === selectedClient.id
          ? { ...client, name: formData.name, time: formData.time }
          : client
      );
      setClientList(updatedClientList);
      toast.success("Cliente editado com sucesso!");
    } else {
      const newId: number =
        Math.max(...clientList.map((client) => client.id)) + 1;
      const newClient: Customer = {
        id: newId,
        name: formData.name,
        time: formData.time,
      };
      setClientList([...clientList, newClient]);
      toast.success("Cliente cadastrado com sucesso!");
    }
    setShowModal(false);
  };

  return (
    <section className="container">
      <h1>Olá, Vini Malvadeza</h1>
      <div className="title-btn">
        <h2>Seus clientes de hoje!</h2>
        <Button content="Cadastrar Horario" onClick={handleAdd} />{" "}
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        client={selectedClient}
        isEditing={isEditing}
      />

      <ListClients
        customers={clientList}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </section>
  );
};

export default CrudUsers;
