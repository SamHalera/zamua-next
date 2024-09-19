import Link from "next/link";
import React from "react";

const Menu = ({ menu }: { menu: Menu }) => {
  return (
    <nav className="gap-5 items-center hidden lg:flex">
      {menu.map((item: MenuItem) => {
        return (
          <Link
            key={item.label}
            className="text-white hover:text-primary duration-500"
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
