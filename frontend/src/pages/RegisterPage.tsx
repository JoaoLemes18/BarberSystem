import { ChangeEvent, useContext, useState } from 'react'
import axios from 'axios';

import MsgNotification from '../components/MsgNotification';
import Button from '../components/Button'
import Input from '../components/Input'
import '../styles/LoginPage.scss'

import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { FiUser } from "react-icons/fi";

import { ModalMsgContext } from '../context/MsgContext';

interface FormState {
  [key: string]: string
}

 const LoginPage = () => {

  const {msgModal, handleModal} = useContext(ModalMsgContext)

  const [ form, setForm ] = useState<FormState>({
    email: '',
    name: '',
    password: '',
    confirmpassword: ''
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }


  const [propMsg, setPropMsg ] = useState({
    title: '',
    subtitle: '',
    color: '',
    typeMsg: ''
  })

  const errorName = {title: 'Nome Requerido', subtitle: 'Por favor preencha o nome', color: 'red', typeMsg: 'error'}
  const errorEmail = {title: 'Email Requerido', subtitle: 'Por favor preencha o email', color: 'red', typeMsg: 'error'}
  const errorPassword = {title: 'Senha Requerida', subtitle: 'Por favor preencha a senha', color: 'red', typeMsg: 'error'}
  const errorConfirmPassword = {title: 'Senhas Desiguais', subtitle: 'As senhas não se confirmam', color: 'red', typeMsg: 'error'}

  const handleSubmit = async (e) => {
      e.preventDefault()

      if(form.name == '') {
        setPropMsg(errorName)
        handleModal()
        return
      } 

      if(form.email == '') {
        setPropMsg(errorEmail)
        handleModal()
        return
      } 

      if(form.password == '') {
        setPropMsg(errorPassword)
        handleModal()
        return
      } 

      if(form.confirmpassword != form.password) {
        setPropMsg(errorConfirmPassword)
        handleModal()
        return
      } 

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

        {msgModal && <MsgNotification title={propMsg.title} subtitle={propMsg.subtitle}  color={propMsg.color} typeMsg={propMsg.typeMsg}/>}
    </section>
  )
}

export default LoginPage
