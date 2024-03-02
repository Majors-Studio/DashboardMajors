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
          <SheetTrigger className="fixed bottom-5 bg-white left-5 z-50">
                Open
            </SheetTrigger>
          <SheetContent side={"left"} className="w-full max-w-full p-8 backdrop-blur-sm text-white bg-gradient-to-r from-[#060B26] to-[#060B26]">
            <SheetHeader className="mb-5">
                  <SheetTitle>{title}</SheetTitle>
                <SheetDescription className="">Navigation for the app</SheetDescription>
            </SheetHeader>
            <Separator className="my-5 bg-white" />
            {children}
        </SheetContent>
    </Sheet>
  )
}
