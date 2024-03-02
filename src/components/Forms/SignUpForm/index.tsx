import React from 'react';
import LabelInput from '../../LabelInput';
import Button from '../../Button';
import AuthTitleDescription from '../../AuthTitleDescription';
import { useForm } from '@/contexts/FormContext';

const SignUpForm = () =>    {
  const {  setFormType } = useForm();
  
  const [name, setName] = React.useState("Marcelo Bracet");
  const [email, setEmail] = React.useState("marcelo.bracet1@gmail.com");
  const [password, setPassword] = React.useState("marcelo123");
  
    return (
        
        <form
        className="w-[500px]"
        >
            <AuthTitleDescription title="Bem-vindo(a)!" description='Crie sua conta para conseguir acessar seu Dashboard.'/>
      <LabelInput value={name} onChange={e => setName(e.target.value)} label="Nome" type="nome" placeholder="Digite seu nome" />
        <LabelInput value={email} onChange={e => setEmail(e.target.value)} label="Email" type="email" placeholder="Digite seu email" />
        <LabelInput value={password} onChange={e => setPassword(e.target.value)} label="Senha" type="password" placeholder="Digite sua senha" />
            <Button label="Entrar" />
            <p className="text-white mt-5">Já possui uma conta? <span onClick={() => setFormType('signin')} className="text-purple-600 cursor-pointer">Login</span></p>
      </form>);
}

export default SignUpForm;