import { StatusBox } from "@/src/components/StatusBox";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StatusBoxProps } from "@/src/components/StatusBox/StatusBox";

const Status: React.FC = () => {
  const statusList: StatusBoxProps[] = [
    {
      percentage: "+10%",
      title: "Total Revenue",
      value: "$1,200",
    },
    {
      percentage: "-5%",
      title: "Total Cost",
      value: "$1,200",
    },
    {
      percentage: "+10%",
      title: "Total Revenue",
      value: "$1,200",
    },
    {
      percentage: "-5%",
      title: "Total Cost",
      value: "$1,200",
    },
  ];

  return (
    <Carousel
      className="
      py-[12px]
      mx-[45px]
    "
    >
      <CarouselContent>
        {statusList.map((status, index) => {
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <StatusBox
                percentage={status.percentage}
                title={status.title}
                value={status.value}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious
        className="
        text-white
      "
      />
      <CarouselNext
        className="
        text-white
      "
      />
    </Carousel>
  );
};

export default Status;
