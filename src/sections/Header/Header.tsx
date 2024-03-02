import { NavigationInline } from "@/src/components/NavigationInline";
import { SearchHeader } from "@/src/components/SearchHeader";
import React from "react";

const Header: React.FC = () => {

  return (
      <div className="
    flex flex-row justify-between
    items-center
    mt-[42px]
    mb-[24px]
    ">
      <section>
        <NavigationInline />
      </section>
          <section>
              <SearchHeader />
      </section>
    </div>
  );
};

export default Header;
