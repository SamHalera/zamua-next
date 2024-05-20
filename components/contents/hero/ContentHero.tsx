import { cn } from "@/lib/cn";
import Image from "next/image";
import React from "react";
const ContentHero = ({ component }: { component: TContentHero }) => {
  console.log("component==>", component);

  return (
    <div
      className={cn({
        "h-screen": component.isHomePage,
      })}
      style={{
        backgroundImage: `url(/images/${component.optionsHero.bgImage})`,
      }}
    >
      <Image
        src={component.image.url}
        width={component.image.width}
        height={component.image.height}
        alt=""
      />
    </div>
  );
};

export default ContentHero;
