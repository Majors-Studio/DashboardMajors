import { AuthButton } from "@/src/components/AuthButton";
import { ConfigButton } from "@/src/components/ConfigButton";
import { NavigationInline } from "@/src/components/NavigationInline";
import { SearchHeader } from "@/src/components/SearchHeader";
import React from "react";

const Header: React.FC = () => {
  return (
    <div
      className="
    flex flex-row justify-between
    items-center
    mt-[42px]
    mb-[24px]
    "
    >
      <NavigationInline />
      <section
        className="
    flex flex-row
    justify-between
    items-center
    gap-4

          "
      >
        <SearchHeader />
        <AuthButton />
        <ConfigButton />
      </section>
    </div>
  );
};

export default Header;
