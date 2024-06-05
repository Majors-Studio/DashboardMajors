'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'

type LeadProps = {
  id: string
  email: string
}

type LeadsContextType = {
  leads: LeadProps[]
  setLeads: React.Dispatch<React.SetStateAction<LeadProps[]>>
}

const LeadsContext = createContext<LeadsContextType>({
  leads: [],
  setLeads: () => {},
})

export const LeadsProvider = ({ children }: { children: React.ReactNode }) => {
  const [leads, setLeads] = useState<LeadProps[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/leads/asc')
      .then(response => {
        console.log(response.data)
        setLeads(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <LeadsContext.Provider
      value={{
        leads,
        setLeads,
      }}
    >
      {children}
    </LeadsContext.Provider>
  )
}

export const useLeads = () => {
  return useContext(LeadsContext)
}
