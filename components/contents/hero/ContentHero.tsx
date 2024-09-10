import NextImage from "@/components/NextImage";
import { cn } from "@/lib/cn";
import Image from "next/image";
import React from "react";
const ContentHero = ({ component }: { component: TContentHero }) => {
  return (
    <div
      className={cn("relative", {
        "h-screen": component.isHomePage,
      })}
      style={{
        backgroundImage: `url(/images/${component.optionsHero.bgImage})`,
      }}
    >
      <div>
        <NextImage dataImage={component.image} />
        <div dangerouslySetInnerHTML={{ __html: component.title }} />
      </div>
      {component.iconScroll && (
        <div className="absolute left-2/4 -bottom-32 flex flex-col items-center gap-6">
          <span className="[writing-mode:vertical-lr]">scroll</span>
          <div className=" w-[2px] h-60 bg-primary"></div>
        </div>
      )}
    </div>
  );
};

export default ContentHero;
