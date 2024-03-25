import '../styles/CrudUsers.scss'

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
}

export default CrudUsers
