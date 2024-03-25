import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { TiDeleteOutline } from "react-icons/ti";
import "react-toastify/dist/ReactToastify.css";
import "../styles/CrudUsers.scss";
import Button from "../components/Button";
import ListClients from "../components/ListClients";
import Modal from "../components/Modal";

<<<<<<< HEAD
import { useEffect } from 'react'
import axios from 'axios'


const CrudUsers = () => {

  useEffect(() => {
    const fetchCookies = async () => {
      const token = document.cookie.split('=')[1]
   
      try {
        const response = await axios.get('http://localhost:3000/users/listUsers', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }

    fetchCookies()
  }, [])

  return (
    <section className="container">
   sdsadas
    </section>
  )
=======
interface Customer {
  id: number;
  name: string;
  time: string;
>>>>>>> 52776888b04831b8244df005dfa83cbbc8e76efc
}

const initialCustomers: Customer[] = [
  { id: 1, name: "João", time: "11:50" },
  { id: 2, name: "Mateus", time: "11:50" },
  { id: 4, name: "Mateus", time: "11:50" },
];

const CrudUsers: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [clientList, setClientList] = useState<Customer[]>(initialCustomers);
  const [selectedClient, setSelectedClient] = useState<Customer | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleDelete = (id: number): void => {
    setClientList(clientList.filter((client) => client.id !== id));
    toast.success("Cliente excluído com sucesso!", {
      icon: <TiDeleteOutline />,
    });
  };

  const handleAdd = (): void => {
    setSelectedClient(null);
    setIsEditing(false);
    setShowModal(true);
  };

  const handleEdit = (id: number): void => {
    const selected = clientList.find((client) => client.id === id);
    if (selected) {
      setSelectedClient(selected);
      setIsEditing(true);
      setShowModal(true);
    }
  };

  const handleSave = (formData: { name: string; time: string }): void => {
    const { name, time } = formData;
    const updatedClientList = isEditing
      ? clientList.map((client) =>
          client.id === selectedClient!.id ? { ...client, name, time } : client
        )
      : [
          ...clientList,
          {
            id: Math.max(0, ...clientList.map((client) => client.id)) + 1,
            name,
            time,
          },
        ];
    setClientList(updatedClientList);
    toast.success(
      isEditing
        ? "Cliente editado com sucesso!"
        : "Cliente cadastrado com sucesso!"
    );
    setShowModal(false);
  };

  return (
    <section className="container">
      <h1>Olá, Vini Malvadeza</h1>
      <div className="title-btn">
        <h2>Seus clientes de hoje!</h2>
        <Button content="Cadastrar Horario" onClick={handleAdd} />
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
        autoClose={3900}
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
