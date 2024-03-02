import { WelcomeCard } from "@/src/components/WelcomeCard";
import React from "react";

const Board: React.FC = () => {
    return (
        <div>
            <section className="h-[340px]">
                <WelcomeCard />
            </section>
            <section></section>
            <section></section>
      </div>
  );
};

export default Board;
