import React from "react";
import "../styles/CrudUsers.scss";
import Button from "../components/Button";

interface Customer {
  id: number;
  name: string;
  tel: number;
  time: any;
}

const customers: Customer[] = [
  { id: 1, name: "João", tel: 6599999999, time: "11:50" },
  { id: 2, name: "Mateus", tel: 6599999, time: "11:50" },
  { id: 4, name: "Mateus", tel: 6599999, time: "11:50" },
  { id: 5, name: "João", tel: 6599999, time: "11:50" },
  { id: 6, name: "Mateus", tel: 659999999, time: "11:50" },
];

const CrudUsers: React.FC = () => {
  return (
    <section className="container">
      <h1>Olá, User</h1>
      <h2>Seu clientes!</h2>
      <div className="btn-cdt ">
        <Button content="Cadastrar" />
      </div>

      <div className="container-list-users">
        {customers.map((customer) => (
          <div key={customer.id} className="user-item">
            <div className="avatar"></div>{" "}
            <div className="user-details">
              <h3>{customer.name}</h3>
              <p>Telefone: {customer.tel} </p>
              <p>Horario: {customer.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CrudUsers;
