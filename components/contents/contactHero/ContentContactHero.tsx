import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContentContactHero = ({
  component,
}: {
  component: TContentContactHero;
}) => {
  return (
    <div
      className="bg-cover bg-fixed h-screen"
      style={{
        backgroundImage: `url(/images/${component.bgImage})`,
      }}
    >
      <div className="bg-black/40 h-screen flex flex-col gap-12 justify-center items-center">
        <div
          className="text-white text-7xl font-semibold mb-10"
          dangerouslySetInnerHTML={{ __html: component.title }}
        />
        <div
          className="text-center border-b pb-7"
          dangerouslySetInnerHTML={{ __html: component.text }}
        />

        <div className="flex gap-7 ">
          <Link href={"https://www.facebook.com/zamua/"} target="_blank">
            <Facebook className="size-10 text-primary" />
          </Link>
          <Link
            href={"https://www.instagram.com/zamua_haleri/"}
            target="_blank"
          >
            <Instagram className="size-10 text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentContactHero;
