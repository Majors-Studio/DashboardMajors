import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { navAside } from '@/data/aside/nav-aside';


export const Aside = () => {
    
    const navItems = navAside.map((nav, index) => {
        return (
            <div key={index}>
                <h2>{nav.subtitle}</h2>
                <ul>
                    {nav.items.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.href}>
                                    {item.icon && <item.icon />}
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
          <SheetContent style={{
              width: "100%",
              maxWidth: "264px",
                padding: "24px",              
            }}>
            {navItems}
        </SheetContent>
    </Sheet>
  )
}
