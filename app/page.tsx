'use client'

import { Aside } from "@/src/components/Aside";
import { BackgroundImage } from "@/src/components/BackgroundImage";
import { StatusBox } from "@/src/components/StatusBox";
import { useState } from "react";
import { navAside } from '@/data/aside/nav-aside';

export default function Home() {
  
  const [isOpen, setIsOpen] = useState(true);
  
   const navItems = navAside.map((nav, index) => {
        return (
            <div className="text-white mb-5" key={index}>
                <h2 className="tracking-wide text-sm">{nav.subtitle}</h2>
                <ul className="cursor-pointer">
                    {nav.items.map((item, index) => {
                        return (
                            <li className="capitalize mt-2 p-1 rounded-lg hover:bg-[#1A1F37]" key={index}>
                                <a className="flex items-center gap-3 my-2" href={item.href}>
                                    {item.icon && <item.icon className={"rounded-lg bg-[#1A1F37] p-1 w-7 h-7"} />}
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
    <main className="w-screen h-screen
    flex flex-row justify-start items-start p-[20px] gap-[20px] overflow-hidden relative bg-[#060B26] z-[-10]
    ">
      <BackgroundImage />
      <Aside title="Majors Solutions" isOpen={isOpen} setIsOpen={setIsOpen} children={navItems} />
      <StatusBox/>
    </main>
  );
}
