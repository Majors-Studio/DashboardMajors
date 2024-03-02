import { WalletIcon } from "lucide-react";
import React from "react";

const StatusBox: React.FC = () => {
  return (
    <div className="w-full h-[80px] bg-gradient-to-r from-[#060b26] to-[#1a1f37] flex flex-row justify-between items-center p-[16px] min-w-[250px] max-w-[350px]">
      <section>
        <section>
          <p className="text-[#A0AEC0] ">Today’s Money</p>
        </section>
        <section className="flex flex-row gap-[6px]">
          <p className="text-white">$53,000</p>
          <p>+55%</p>
        </section>
      </section>
      <section>
        <div
          className="
                flex
                align-center
                justify-center
                p-[12px]
                bg-[#0075ff]
                rounded-[12px]
              "
        >
          <WalletIcon size={24} color="white" />
        </div>
      </section>
    </div>
  );
};

export default StatusBox;
