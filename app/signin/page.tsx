'use client'

import Button from '@/src/components/Button'
import LabelInput from '@/src/components/LabelInput'
import React from 'react'

const SignIn = () => {
  
  const [formType, setFormType] = React.useState('signin')
  
  return formType === 'signin' ? (
    <section>
      <LabelInput label="Email" type="email" placeholder="Digite seu email" />
      <LabelInput label="Senha" type="password" placeholder="Digite sua senha" />
      <Button label="Entrar" />
      <p onClick={() => setFormType('signup')} className=" text-white">Ainda não possui uma conta? <span className="text-blue-400 cursor-pointer">Registre-se</span></p>
    </section>
  ) : (
    <section>
      <LabelInput label="Nome" type="text" placeholder="Digite seu nome" />
      <LabelInput label="Email" type="email" placeholder="Digite seu email" />
      <LabelInput label="Senha" type="password" placeholder="Digite sua senha" />
        <Button label="Entrar" />
        <p onClick={() => setFormType('signin')} className="text-white">Já possui uma conta? <span
        className="text-blue-400 cursor-pointer">Login</span></p>
    </section>
    )
  
}

export default SignIn