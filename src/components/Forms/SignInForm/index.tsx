import React from 'react';
import LabelInput from '../../LabelInput';
import Button from '../../Button';

type FormType = 'signin' | 'signup';

const SignInForm= (formType: FormType) => {
  return <form>
    {formType === 'signin' && (
      <>
        <LabelInput label="Email" type="email" placeholder="Digite seu email" />
        <LabelInput label="Senha" type="password" placeholder="Digite sua senha" />
        <Button label="Entrar" />
      </>
    )}
  </form>;
}

export default SignInForm;