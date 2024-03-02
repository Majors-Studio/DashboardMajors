import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HelpCircleIcon } from "lucide-react";

const AsideMessage: React.FC = () => {
  const bgPath = "/question/card_background.png";

  return (
    <Card
      style={{
        backgroundImage: `url(${bgPath})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
              width: "100%",
     
      }}
    >
      <CardHeader>
        <div className=" w-[35px] h-[35px] rounded-[12px] bg-[#F5F5F5] flex items-center justify-center">
          <div className="w-[24px] h-[24px] flex items-center justify-center rounded-[24px]">
            <HelpCircleIcon
              fill={"#0075FF"}
              stroke={"white"}
              strokeWidth={2}
              className="w-7 h-7"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="font-bold text-[14px]">
          Precisa de Ajuda?
        </CardTitle>
        <CardDescription className="text-[12px]">
          Por-favor confira a documentação para mais informações.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full text-white bg-gradient-to-r from-[rgba(6, 11, 40, 0.74)] to-[rgba(10, 14, 35, 0.71)] rounded-[12px] bg-transparent">
          DOCUMENTAÇÃO
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AsideMessage;
