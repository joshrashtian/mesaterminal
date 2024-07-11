"use client";
import React, { useState } from "react";

const Tabs = [
  {
    title: "Home",
  },
  { title: "Inventory" },
];

const Navigation = () => {
  const [active, setActive] = useState(Tabs[0]);
  return (
    <nav className="flex flex-row gap-7 text-3xl">
      {Tabs.map((tab) => (
        <button
          key={tab.title}
          onClick={() => setActive(tab)}
          className={`p-2 px-5 rounded-full font-medium duration-500  ${
            active.title === tab.title && "text-orange-700 bg-orange-100/50"
          }`}
        >
          {tab.title}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
