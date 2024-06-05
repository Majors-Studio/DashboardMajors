import { WalletIcon } from "lucide-react";
import React from "react";

export type StatusBoxProps = {
  title: string;
  value: string | number;
  percentage: string;
};

const StatusBox: React.FC<StatusBoxProps> = ({ percentage, title, value }) => {
  const checkColorForPercentage = (percentage: string) => {
    if (percentage.includes("-")) {
      return "text-[#FF6347]";
    } else {
      return "text-[#10B981]";
    }
  };

  return (
    <div className="w-full h-[80px] bg-gradient-to-r from-[#060b26] to-[#1a1f37] flex flex-row justify-between items-center p-[16px] min-w-[250px] rounded-[20px]">
      <section>
        <section>
          <p className="text-[#A0AEC0] ">{title}</p>
        </section>
        <section className="flex flex-row gap-[6px]">
          <p className="text-white">{value}</p>
          <p
            className={`
                flex
                items-center
                justify-center
                rounded-[12px]
                p-[4px]
                text-xs
                ${checkColorForPercentage(percentage)}
          `}
          >
            {percentage}
          </p>
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
