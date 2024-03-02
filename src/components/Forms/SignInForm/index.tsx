'use client'

import React from 'react';
import LabelInput from '../../LabelInput';
import Button from '../../Button';
import AuthTitleDescription from '../../AuthTitleDescription';
import SignUpForm from '../SignUpForm';
import { useForm } from '@/contexts/FormContext';

const SignInForm = () => {
  
  const { formType, setFormType } = useForm();
  
  const [email, setEmail] = React.useState("marcelo.bracet1@gmail.com");
  const [password, setPassword] = React.useState("marcelo123");
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    }
  
  return formType === 'signin' ? <form onSubmit={handleSubmit} className="w-[500px]">
    <AuthTitleDescription title="Nice to see you!" description='Enter your email and password to sign in'/>
        <LabelInput value={email} onChange={e => setEmail(e.target.value)} label="Email" type="email" placeholder="Digite seu email" />
    <LabelInput value={password} onChange={e => setPassword(e.target.value)} label="Senha" type="password" placeholder="Digite sua senha" />
    
    <div className="flex gap-2 mt-5 ">
      <input type="checkbox" id="remember-me" />
      <label htmlFor="remember-me" className="text-white">Lembrar-me</label>
    </div>
        <Button label="Entrar" />
        <p className="text-white mt-5">Ainda não possui uma conta? <span onClick={() => setFormType('signup')} className="text-purple-600 cursor-pointer">Registre-se</span></p>
  </form> : <SignUpForm />

 ;
}

export default SignInForm;