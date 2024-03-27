import Button from "./Button"
import PerfilFirstLetter from "./PerfilFirstLetter"

 
interface Cards {
  id: number
  name: string
  email: string
}

interface CardProps {
  item: Cards[]
}

const Card: React.FC<CardProps> = ({item}) => {
   return (
     <div className="container-cards" style={{background: 'red'}}>
      
        {item.map((item) => (
                <div className="card-customer" key={item.id}>
                  <td><PerfilFirstLetter word={item.name}/></td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>

                  <div className="div-buttons">
                    <Button content="..."/>
                  </div>
                </div>   
              ))}
     </div>
   )
 }
 
export default Card
 

























import React from "react";

// import {
//   IoTimeOutline,
//   IoTrashOutline,
//   IoPencilOutline,
// } from "react-icons/io5";

// interface Customer {
//   id: number;
//   name: string;
//   time: string;
// }

// interface ListClientsProps {
//   customers: Customer[];
//   onDelete: (id: number) => void;
//   onEdit: (id: number, name: string, time: string) => void; // Alterada a assinatura da função onEdit
// }

// const ListClients: React.FC<ListClientsProps> = ({
//   customers,
//   onDelete,
//   onEdit,
// }) => {
//   return (
//     <div className="container-list-users">
//       <table>
//         <thead>
//           <tr>
//             <th>Nome</th>
//             <th>Horário</th>
//             <th>Excluir</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((customer) => (
//             <tr key={customer.id}>
//               <td>
//                 <div className="avatar">{customer.name.charAt(0)}</div>
//                 {customer.name}
//               </td>
//               <td className="div-icon-td">
//                 <IoTimeOutline /> {customer.time}
//               </td>
//               <td>
//                 <button onClick={() => onDelete(customer.id)}>
//                   <IoTrashOutline />
//                 </button>
//               </td>
//               <td>
//                 <button
//                   onClick={() =>
//                     onEdit(customer.id, customer.name, customer.time)
//                   }
//                 >
//                   <IoPencilOutline />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
