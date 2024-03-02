import { Aside } from "@/src/components/Aside";
import { BackgroundImage } from "@/src/components/BackgroundImage";
import Status from "@/src/sections/Status/Status";

export default function Home() {
  return (
    <main className="w-screen h-screen
    flex flex-row justify-start items-start p-[20px] gap-[20px] overflow-hidden relative bg-[#060B26] z-[-10]
    ">
      <BackgroundImage />
      <Aside />

      <Status/>
    </main>
  );
}
