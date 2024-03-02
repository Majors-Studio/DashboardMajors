'use client'

import { useEffect } from "react";
import { api } from "@/api/auth";
import { redirect } from "next/dist/server/api-utils";
import {  useRouter } from "next/navigation";
import { Aside } from "@/src/components/Aside";

export default function Home() {
  
  const router = useRouter();
  
  useEffect(() => {
    if(localStorage.getItem("loggedIn")) {
    router.push("/dashboard")
    }
  })
  
  return (
    <main className="">
      <Aside/>
    </main>
  );
}
