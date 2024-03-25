import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { TiDeleteOutline } from "react-icons/ti";
import "react-toastify/dist/ReactToastify.css";
import "../styles/CrudUsers.scss";
import Button from "../components/Button";
import ListClients from "../components/ListClients";
import Modal from "../components/Modal";

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


export default CrudUsers;
