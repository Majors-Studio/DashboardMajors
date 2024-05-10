'use client'

import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'

type TransactionContextProps = {}

type FlagProps =
  | 'Restaurants'
  | 'Groceries'
  | 'Transport'
  | 'Health'
  | 'Leisure'
  | 'Other'

type TransactionTypeProps =
  | 'income'
  | 'outcome'
  | 'transfer'
  | 'payment'
  | 'deposit'
  | 'withdraw'
  | 'refund'
  | 'fee'
  | 'service'
  | 'investment'
  | 'other'

type Transaction = {
  id: number
  ammount: number
  description: string
  type: TransactionTypeProps
  flag: FlagProps
}

const TransactionContext = createContext<TransactionContextProps>({})

export const TransactionProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [transactions, setStransactions] = useState<Transaction[]>([])

  const value = {}

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(TransactionContext)
}
