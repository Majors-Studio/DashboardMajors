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
        name: 'Majors Leads',
        href: '/leads',
        icon: Table2,
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
    ],
  },
]
