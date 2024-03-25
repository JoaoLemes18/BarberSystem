// STYLES
import "react-toastify/dist/ReactToastify.css";
import '../styles/CrudUsers.scss'

// OTHERS
import { useEffect, useState } from 'react'
import axios from 'axios'

// COMPOTENTS
import ListClients from "../components/ListClients";


const CrudUsers = () => {

  const [customers, setCustomer] = useState()

  useEffect(() => {
    const fetchCookies = async () => {
      const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('userToken='));
    
      if (cookie) {
        const token = cookie.split('=')[1];
        
        try {
          const response = await axios.get('http://localhost:3000/users/listUsers', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
         
          setCustomer(response.data)
          return response
        } catch (err) {
          return err
        }
      } else {
        console.log('User token cookie not found.')
      }
    };
    fetchCookies()
  }, []);

  return (
    <section className="body">
      <ListClients customers={customers || []}/>
    </section>
  );
};

export default CrudUsers;