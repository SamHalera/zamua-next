import Image from "next/image";
import React from "react";
import Menu from "../Menu";
import Link from "next/link";
import { getMenu } from "@/actions/getMenu";
import Navbar from "./Navbar";

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
    <header className=" h-24 bg-black flex justify-center sticky top-0 z-40">
      <Navbar menu={menu} />
    </header>
  );
};

export default Header;
