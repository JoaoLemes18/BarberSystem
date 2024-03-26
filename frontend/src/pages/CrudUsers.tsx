// STYLES
import "react-toastify/dist/ReactToastify.css";
import '../styles/CrudUsers.scss'

// OTHERS
import { useEffect, useState } from 'react'
import axios from 'axios'

// COMPOTENTS
import ListClients from "../components/ListClients";
import CardClients from "../components/CardClients"


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

  const [typeListCustomers, setTypeListCustomers] = useState('list')

  const handleWindowResize = () => {
      if(window.innerWidth < 800) setTypeListCustomers('card')
      else setTypeListCustomers('list')
  }

  window.addEventListener('resize', handleWindowResize)
  window.addEventListener('load', handleWindowResize)

  return (
    <section className="body">
      {typeListCustomers == 'list' ? 
      <ListClients customers={customers || []}/> : 
      <CardClients customers={customers || []} />}
    </section>
  );
};

export default CrudUsers;