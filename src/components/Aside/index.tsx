import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from '@/components/ui/separator';

type AsideProps = {
    title: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

export const Aside = ({title, isOpen, setIsOpen, children} : AsideProps) => {
    
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side={"left"} className="w-full max-w-full p-8 backdrop-blur-sm text-white bg-gradient-to-r from-[#060B26] from-70% to-[#1A1F37]">
            <SheetHeader className="mb-5">
                  <SheetTitle className="">{title}</SheetTitle>
                <SheetDescription className="">Navigation for the app</SheetDescription>
            </SheetHeader>
            <Separator className="my-5 bg-white" />
            {children}
        </SheetContent>
    </Sheet>
  )
}
