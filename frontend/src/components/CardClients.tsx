import Button from "./Button"
import PerfilFirstLetter from "./PerfilFirstLetter"

 
interface Customer {
  id: number
  name: string
  email: string
}

interface ListUsers {
  customers: Customer[]
}

const ListClients: React.FC<ListUsers> = ({customers}) => {
   return (
     <div className="container-cards" style={{background: 'red'}}>
      
        {customers.map((customer) => (
                <div className="card-customer" key={customer.id}>
                  <td><PerfilFirstLetter word={customer.name}/></td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>

                  <div className="div-buttons">
                    <Button content="..."/>
                  </div>
                </div>   
              ))}
                
  
     </div>
   )
 }
 
export default ListClients
 

























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
