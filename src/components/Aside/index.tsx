"use client";

import React, { useState, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { navAside } from "@/data/aside/nav-aside";
import AsideMessage from "../AsideMessage/AsideMessage";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type AsideProps = {
  title: string;
};

export const Aside = ({ title }: AsideProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const userLoggedIn = localStorage.getItem("loggedIn") === "true";

  const handleTriggerClick = () => {
    if (!userLoggedIn) {
      return toast("Você precisa estar logado para acessar essa funcionalidade")
    }
  }
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger onClick={handleTriggerClick} className="fixed bottom-5 left-5 cursor-pointer text-white">
        abrir
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className={cn("w-full max-w-full p-8 backdrop-blur-sm text-white bg-gradient-to-r from-[#060B26] from-70% to-[#1A1F37]", userLoggedIn ? 'blur-none' : 'blur-sm ')}
      >
        <SheetHeader className="mb-5">
          <SheetTitle className="">{title}</SheetTitle>
          <SheetDescription className="">
            Navigation for the app
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-5 bg-white" />
        {navAside.map((nav, index) => {
          return (
            <div className="text-white mb-5" key={index}>
              <h2 className="tracking-wide text-sm">{nav.subtitle}</h2>
              <ul className="cursor-pointer">
                {nav.items.map((item, index) => {
                  return (
                    <li
                      className="capitalize mt-2 p-1 rounded-lg back drop-shadow-sm hover:bg-[#1A1F37]"
                      key={index}
                    >
                      <a
                        className="flex items-center gap-3 my-2"
                        href={item.href}
                      >
                        {item.icon && (
                          <item.icon
                            className={"rounded-lg bg-[#1A1F37] p-1 w-7 h-7"}
                          />
                        )}
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <SheetFooter>
          <AsideMessage />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
