import { Aside } from "@/src/components/Aside";
import { StatusBox } from "@/src/components/StatusBox";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[#060B26]
    flex flex-row justify-start items-start p-[20px] gap-[20px] overflow-hidden
    
    ">
      <Aside />
      <StatusBox/>
    </main>
  );
}
