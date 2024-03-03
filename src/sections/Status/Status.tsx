'use client'

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
import { useAuth } from "@/contexts/AuthContext";

const Status: React.FC = () => {
  
  const { userLoggedIn } = useAuth();
  
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
      <CarouselContent >
        {statusList.map((status, index) => {
          return (
            <CarouselItem key={index} className="
            w-full
            md:basis-1/2 lg:basis-1/3
            xl:basis-1/4
            ">
              <StatusBox
                percentage={userLoggedIn ? status.percentage : ''}
                title={status.title}
                value={userLoggedIn ? status.value : 'R$ ****' }
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
