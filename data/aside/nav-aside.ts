import { ArrowRightToLineIcon, Home, Table, Table2, Plus } from 'lucide-react'

export const navAside = [
  {
    subtitle: 'Main Pages',
    items: [
      {
        name: 'Dashboard',
        href: '/dashboard',
        icon: Home,
      },
      {
        name: 'Tables',
        href: '/tables',
        icon: Table,
      },
      {
        name: 'Billing',
        href: '/billing',
        icon: Table2,
      },
      {
        name: 'RTL',
        href: '/tables',
        icon: ArrowRightToLineIcon,
      },
    ],
  },
  {
    subtitle: 'Account Pages',
    items: [
      {
        name: 'Profile',
        href: '/profile',
        icon: Home,
      },
      {
        name: 'Sign In',
        href: '/signin',
        icon: Table,
      },
      {
        name: 'Sign Up',
        href: '/signup',
        icon: Table2,
      },
    ],
  },
]
