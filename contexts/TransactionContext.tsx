'use client'

import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'

import { Transaction, TransactionContextProps } from '@/src/types'

const TransactionContext = createContext({} as TransactionContextProps)

export const TransactionProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      ammount: 150,
      description: 'Test',
      type: 'income',
      flag: 'Restaurants',
      userRef: 1,
    },
    {
      id: 2,
      ammount: 210.5,
      description: 'Test',
      type: 'income',
      flag: 'Restaurants',
      userRef: 1,
    },
    {
      id: 3,
      ammount: 29.9,
      description: 'Test',
      type: 'income',
      flag: 'Restaurants',
      userRef: 2,
    },
    {
      id: 4,
      ammount: 100,
      description: 'Test',
      type: 'income',
      flag: 'Restaurants',
      userRef: 2,
    },
  ])

  const value = {
    transactions,
    setTransactions,
  }

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => {
  return useContext(TransactionContext)
}
