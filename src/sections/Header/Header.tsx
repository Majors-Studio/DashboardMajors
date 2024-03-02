import { NavigationInline } from "@/src/components/NavigationInline";
import React from "react";

const Header: React.FC = () => {
  const trilha = [
    { title: 'Home', url: '/' },
    { title: 'Dashboard' },
  ];

  return (
    <div>
      <section>
        <NavigationInline trilha={trilha} />
        <p>Dashboard</p>
      </section>
      <section></section>
    </div>
  );
};

export default Header;
