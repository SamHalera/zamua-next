import { AlignRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Header = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FRONT}/api/get-menu`,
    { cache: "no-cache" }
  );

  const data = await response.json();

  // console.log("data header 3", data);

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
        <Link href={"/"}>
          <Image
            className=" object-contain"
            src="/images/logo.png"
            width={143}
            height={27}
            alt="logo de Zamua"
          />
        </Link>

        {/* <div className="flex justify-between items-center gap-8">
          <div className="relative">
            <p className="text-white font-bold text-xl">HOME</p>
          </div>
          <AlignRight
            className="text-[#FFBC20] cursor-pointer hover:scale-110 transition-all"
            size={40}
          />
        </div> */}
        {menu.length > 0 && <Menu menu={menu} />}
      </div>
    </header>
  );
};

export default Header;
