import React from 'react';
import LabelInput from '../../LabelInput';
import Button from '../../Button';

const SignUpForm = () =>    {
  
  const [name, setName] = React.useState("Marcelo Bracet");
  const [email, setEmail] = React.useState("marcelo.bracet1@gmail.com");
  const [password, setPassword] = React.useState("marcelo123");
  
    return <form>
      <LabelInput value={name} onChange={e => setName(e.target.value)} label="Nome" type="nome" placeholder="Digite seu nome" />
        <LabelInput value={email} onChange={e => setEmail(e.target.value)} label="Email" type="email" placeholder="Digite seu email" />
        <LabelInput value={password} onChange={e => setPassword(e.target.value)} label="Senha" type="password" placeholder="Digite sua senha" />
        <Button label="Entrar" />
      </form>;
}

export default SignUpForm;