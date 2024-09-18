import Image from "next/image";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import { getMenu } from "@/actions/getMenu";

const Header = async () => {
  const data = await getMenu("navigation");

  let menu: Menu = [];
  data.map((item: PagePublic) => {
    menu.push({
      id: item.id,
      label: item.attributes.title,
      path: item.attributes.path,
    });
  });

  return (
    <header className=" h-24 bg-black flex justify-center">
      <div className="flex justify-between items-center container">
        <Link href="/">
          <Image
            className=" object-contain"
            src="/images/logo.png"
            width={143}
            height={27}
            alt="logo de Zamua"
          />
        </Link>

        {menu.length > 0 && <Menu menu={menu} />}
      </div>
    </header>
  );
};

export default Header;
