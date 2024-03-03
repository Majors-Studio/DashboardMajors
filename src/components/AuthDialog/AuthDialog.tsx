/* eslint-disable react/no-unescaped-entities */
'use client';
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserIcon, LogOut } from "lucide-react";
import { api } from "@/api/auth";
import SignInForm from "../Forms/SignInForm";
import SignUpForm from "../Forms/SignUpForm";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useForm } from "@/contexts/FormContext";
import { DialogClose } from "@radix-ui/react-dialog";

type AuthDialogProps = {
  title: string;
  description: string;
  inputs: {
    label: string;
    type: string;
    placeholder: string;
  }[];
};

const AuthDialog = ({ title, description, inputs }: AuthDialogProps) => {
  const { userLoggedIn, setUserLoggedIn } = useAuth();
  const { formType, setFormType } = useForm();
  
  const CloseDialog: React.FC = () => {
    return (
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  };
  
  return (
    <Dialog>
      {!userLoggedIn ? <Link className="flex w-full" href="/signin">
        <div
          className="
        text-white flex flex-row gap-2 items-center w-full justify-center"
        >
          <UserIcon size="16px" />
          Sign In
        </div>
      </Link> : <div className="flex w-full cursor-pointer">
        <DialogTrigger>
        <div
          className="
        text-white flex flex-row gap-2 items-center w-full justify-center"
        >
          <LogOut size="16px" />
          Sign Up
            </div>
            </DialogTrigger>
      </div>}
      <DialogContent className="sm:max-w-[425px] ">
        <h1 className="text-white">Tem certeza que deseja sair da sua conta?</h1>
        <p className="text-[#A0AEC0] text-sm md:text-md">
          Se você sair, você será redirecionado para a página inicial.</p>
        <DialogFooter className="text-white">
          <DialogClose>
          <Button
              variant={"destructive"}
              onClick={() => { api.logout(); setUserLoggedIn(false) }} >Sair</Button>
            </DialogClose>
          <DialogClose><Button variant={"outline"} onClick={() => { }} >Cancelar</Button></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
