import { Aside } from "@/src/components/Aside";
import { BackgroundImage } from "@/src/components/BackgroundImage";
import { Header, Status } from "@/src/sections";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-row p-[20px] gap-[20px] overflow-hidden relative">
      <BackgroundImage />
      <Aside title="Majors Solutions" />
      <div className="
        flex flex-col
        gap-[20px]
        w-full
      ">
        <Header />
        <Status />
      </div>
    </main>
  );
}
