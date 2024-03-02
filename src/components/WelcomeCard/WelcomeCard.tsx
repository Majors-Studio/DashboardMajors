import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

const WelcomeCard: React.FC = () => {
  const welcomeImg = "/welcome/welcome.png";

  return (
    <div
      className="max-w-[620px] h-full  text-white overflow-hidden rounded-[20px]"
      style={{
        backgroundImage: `url(${welcomeImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="bg-gradient-to-b from-[#060b262c] to-[#1a1f3746] w-full h-full flex flex-col justify-between p-[20px]">
        <section>
          <p
            className="
            text-[#A0AEC0]
            text-[14px]

          "
          >
            Bem-vindo de volta,
          </p>
          <h1
            className="
            text-[28px]
            font-[700]


          "
          >
            Majors Solutions
          </h1>
          <p
            className="
                    text-[#A0AEC0]
                    text-[16px]
                    max-w-[180px]

                  "
          >
            Glad to see you again!{"\n"}Ask me anything.
          </p>
        </section>
        <section>
          <Button
            className="text-[12px]"
          >
            Ask a question
            <ArrowRightIcon className="w-[20px] h-[20px] ml-[10px]" />
          </Button>
        </section>
      </div>
    </div>
  );
};

export default WelcomeCard;
