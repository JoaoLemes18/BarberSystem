import { ChangeEvent, useState } from 'react'
import axios from 'axios';

import Button from '../components/Button'
import Input from '../components/Input'
import '../styles/LoginPage.scss'

import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { FiUser } from "react-icons/fi";


interface FormState {
  [key: string]: string
}

const LoginPage = () => {

  const [ form, setForm ] = useState<FormState>({})

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = async () => {
      await axios.post('http://localhost:3000/auth/register', form)
      window.location.reload()
  }


  return (
    <section className='body'>
        <form onSubmit={handleSubmit} method='post'>
            <h2>Bem-Vindo ao ShearSmart, <br /> Faça Seu Cadastro.</h2>
            <p>Já possui uma conta? {''}
               <a href="/login">Entrar na conta</a>
            </p> <br /> 
            <Input onChange={handleInput} value={form.email} name='email' icon={<MdOutlineMailOutline />} type='email' placeholder='Email'/>
            <Input onChange={handleInput} value={form.name} name='name' icon={<FiUser />} type='name' placeholder='Nome'/>
            <Input onChange={handleInput} value={form.password} name='password' icon={<GrSecure />} type='password' placeholder='Senha'/>
            <Input onChange={handleInput} value={form.confirmpassword} name='confirmpassword' icon={<MdOutlineSecurity />} type='password' placeholder='Confirmar Senha'/>
            <Button content='Cadastrar'/>
        </form>
    </section>
  )
}

export default LoginPage
