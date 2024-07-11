import React from "react";
import Clock from "./clock";
import Navigation from "./home/navigation";

const Header = () => {
  return (
    <>
      <header className="absolute">
        <h1 className="font-bold text-6xl ">MESATerminal</h1>
        <Clock />
      </header>
      <nav className="mt-40 sticky top-12">
        <Navigation />
      </nav>
    </>
  );
};

export default Header;
