type User = {
  id: number
  email: string
  password: string
  avatar_profile?: string
  name?: string
  phone?: string
  cpf?: string
  birth?: string
}

const fakeUsers: User[] = [
  {
    id: 1,
    email: 'marcelo.bracet1@gmail.com',
    password: 'marcelo123',
    avatar_profile: 'https://github.com/marceloBxD.png',
    name: 'Marcelo Bracet',
    phone: '21971742501',
    cpf: '19143545750',
    birth: '2002-01-15',
  },
  {
    id: 2,
    email: 'joaoviniciusvitral@hotmail.com',
    password: 'joao123',
    avatar_profile: 'https://github.com/jxvtrl',
    name: 'João Vinicius Vitral',
    phone: '21966767962',
    cpf: '17610160750',
    birth: '2000-12-14',
  },
]

export const api = {
  login: (email: string, password: string): boolean => {
    if (
      fakeUsers.find(user => user.email === email && user.password === password)
    ) {
      localStorage.setItem('loggedIn', 'true')
      return true
    }

    return false
  },

  register: (name: string, email: string, password: string): boolean => {
    if (fakeUsers.find(user => user.email === email)) {
      console.error('Email already exists')
      return false
    }

    alert('User registered')
    fakeUsers.push({ id: fakeUsers.length + 1, email, password })
    return true
  },

  logout: () => {
    localStorage.removeItem('loggedIn')
  },
}
