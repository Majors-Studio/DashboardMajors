'use client'

import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { BellIcon, MinusIcon, Plus, PlusIcon } from 'lucide-react'
import { flags } from '@/data/addbalance/flag'

const NotificationButton: React.FC = () => {
  const [amount, setAmount] = React.useState<number>(50)
  const [flagSelected, setFlagSelected] = React.useState<string | null>(null)

  function onClick(adjustment: number) {
    setAmount(amount + adjustment)
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="text-white">
          <Plus size="20px" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="text-white">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>New Movimentation</DrawerTitle>
            <DrawerDescription>
              Here is to cadaster a new balance on your account.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={amount === 0}
              >
                <MinusIcon className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  <input
                    className="text-center bg-transparent"
                    value={amount}
                    onChange={e => {
                      if (e.target.value === '') {
                        return setAmount(0)
                      }
                      setAmount(parseInt(e.target.value))
                    }}
                    type="text"
                  />
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground"></div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
              >
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="mt-4 w-full">
                {flagSelected ?? 'Choose Flag'}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-white w-full">
                {flags.map(flag => (
                  <DropdownMenuItem
                    onClick={() => setFlagSelected(flag)}
                    className="hover:border-b-2 border-gray"
                    key={flag}
                  >
                    {flag}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="mt-3 h-[120px]"></div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default NotificationButton
