'use client'

import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';

type AuthContextType = {
    userLoggedIn: boolean;
    setUserLoggedIn: (userLogged: boolean) => void;
};

const AuthContext = createContext<AuthContextType>({
    userLoggedIn: false,
    setUserLoggedIn: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
    
    useEffect(() => {
        const user = localStorage.getItem('loggedIn');
        if (user) {
            setUserLoggedIn(true);
        }
        
    }, [userLoggedIn, setUserLoggedIn])
    
    

  return (
    <AuthContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
}   