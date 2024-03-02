import { StatusBox } from "@/src/components/StatusBox";
import React from "react";

const Status: React.FC = () => {
  return (
    <div
      className="
    flex
    flex-row
    justify-center
    items-center
    gap-4

    "
    >
      <StatusBox />
      <StatusBox />
      <StatusBox />
      <StatusBox />
    </div>
  );
};

export default Status;
