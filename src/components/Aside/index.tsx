import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from '@/components/ui/separator';

import { navAside } from '@/data/aside/nav-aside';


export const Aside = () => {
    
    const navItems = navAside.map((nav, index) => {
        return (
            <div className="text-white mb-5" key={index}>
                <h2 className="tracking-wide text-sm">{nav.subtitle}</h2>
                <ul className="cursor-pointer">
                    {nav.items.map((item, index) => {
                        return (
                            <li className="capitalize mt-2 p-1 hover:bg-[#1A1F37]" key={index}>
                                <a className="flex items-center gap-3 my-2" href={item.href}>
                                    {item.icon && <item.icon className="rounded-full bg-[#1A1F37] p-1 w-7 h-7"/>}
                                    {item.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    })
    
  return (
    <Sheet defaultOpen>
        <SheetTrigger>Open</SheetTrigger>
          <SheetContent side={"left"} className="w-[100%] max-w-full p-8 backdrop-blur-md bg-gradient-to-r from-[#060B26] to-[#1A1F37] backdrop-brightness-150" >
            <SheetHeader className="text-white mb-5">
                <SheetTitle>Majors Solutions</SheetTitle>
                <SheetDescription className="">Navigation for the app</SheetDescription>
              </SheetHeader>
              <Separator className="my-5 bg-white"/>
              {navItems}
        </SheetContent>
    </Sheet>
  )
}
