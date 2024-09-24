import Link from "next/link";
import React from "react";

const FooterMenu = ({ menu }: { menu: Menu }) => {
  return (
    <nav className="flex flex-col gap-4 items-center">
      {menu.map((item: MenuItem) => {
        return (
          <Link
            key={item.label}
            href={item.path}
            className="text-primary hover:text-primary/80 duration-500"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default FooterMenu;
