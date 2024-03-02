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
import { UserIcon } from "lucide-react";
import { api } from "@/api/auth";
import SignInForm from "../Forms/SignInForm";
import SignUpForm from "../Forms/SignUpForm";

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
  const [formType, setFormType] = React.useState<"signin" | "signup">("signin");
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="
        text-white flex flex-row gap-2 align-center"
          variant="destructive"
        >
          <UserIcon size="16px" />
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-white">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        {formType === "signin" && <SignInForm/>}
        {formType === "signup" && <SignUpForm/>}
        {formType === "signin" ? <p className="text-white text-sm mt-2">Ainda não possui uma conta? <span onClick={() => setFormType('signup')} className="text-[#0075ff] cursor-pointer">Registre-se</span></p> : <p className="text-white text-sm mt-2">Já possui uma conta? <span onClick={() => setFormType('signin')} className="text-[#0075ff] cursor-pointer">Login</span></p>}
        <DialogFooter>
          <Button className="text-white" variant="destructive" type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
