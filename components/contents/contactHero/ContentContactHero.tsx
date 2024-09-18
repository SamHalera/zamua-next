import { Facebook, Instagram } from "lucide-react";
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
          <Facebook className="size-8 text-primary" />
          <Instagram className="size-8 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default ContentContactHero;
