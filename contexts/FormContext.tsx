'use client'

import React, { useState } from 'react';
import { createContext, useContext } from 'react';

type FormContextType = {
  formType: 'signin' | 'signup';
  setFormType: (formType: 'signin' | 'signup') => void;
};

const FormContext = createContext<FormContextType>({
  formType: 'signin',
  setFormType: () => {},
});

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formType, setFormType] = useState<'signin' | 'signup'>('signin');

  return (
    <FormContext.Provider value={{ formType, setFormType }}>
      {children}
    </FormContext.Provider>
  );
}

export const useForm = () => {
  return useContext(FormContext);
}   