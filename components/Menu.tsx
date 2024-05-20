import Link from "next/link";
import React from "react";

const Menu = async ({ menu }: { menu: Menu }) => {
  return (
    <nav className="flex gap-5 ">
      {menu.map((item: MenuItem) => {
        return (
          <Link
            key={item.label}
            className="text-white hover:text-primary transition-settings"
            href={item.path}
          >
            {item.label.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
};

export default Menu;
