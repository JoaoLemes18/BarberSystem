import { ChangeEvent, useState } from 'react'
import axios from 'axios';

import Button from '../components/Button'
import Input from '../components/Input'
import '../styles/LoginPage.scss'

import { MdOutlineMailOutline } from "react-icons/md";
import { GrSecure } from "react-icons/gr";


interface FormState {
  [key: string]: string
}

const LoginPage = () => {

  const [ form, setForm ] = useState<FormState>({
    email: '',
    password: ''
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      await axios.post('http://localhost:3000/auth/login', form)
  }


  return (
    <section className='body'>
        <form method='post' onSubmit={handleSubmit}>
            <h2>Bem-Vindo ao ShearSmart, <br /> Faça Login.</h2>
            <p>Não possui uma conta? {''}
               <a href="/register">Cadastrar</a>
            </p> <br /> 
            <Input onChange={handleInput} value={form.email} name='email' icon={<MdOutlineMailOutline />} type='email' placeholder='Email'/>
            <Input onChange={handleInput} value={form.password} name='password' icon={<GrSecure />} type='password' placeholder='Senha'/>
            <Button content='Entrar'/>
        </form>
    </section>
  )
}

export default LoginPage
