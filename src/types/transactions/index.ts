export type TransactionContextProps = {
  transactions: Transaction[]
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
}

export type TransactionTypeProps =
  | 'income'
  | 'outcome'
  | 'transfer'
  | 'payment'
  | 'deposit'
  | 'service'
  | 'investment'
  | 'other'

export type Transaction = {
  id: number
  ammount: number
  description: string
  type: TransactionTypeProps
  flag: FlagProps
  userRef: number
}

export type FlagProps =
  | 'Restaurants'
  | 'Groceries'
  | 'Transport'
  | 'Health'
  | 'Leisure'
  | 'Other'
