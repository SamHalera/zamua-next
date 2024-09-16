"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { useRouter } from "next/navigation";

import React from "react";

const ContentCTASection = ({
  component,
}: {
  component: TContentCTASection;
}) => {
  const router = useRouter();

  return (
    <div
      className={cn(" bg-cover bg-fixed", {
        "h-screen": component.ctaOptions.height === "100",
      })}
      style={{
        backgroundImage: `url(/images/${component.ctaOptions.bgImage})`,
      }}
    >
      <div className="bg-black/60 h-screen flex flex-col items-center justify-center gap-8">
        <h1 className="text-primary text-7xl">{component.title}</h1>

        <div
          className="text-white text-3xl leading-10 px-28"
          dangerouslySetInnerHTML={{ __html: component.text }}
        />
        <Button
          onClick={() => {
            router.push(component.cta.path);
          }}
          className="self-center bg-primary text-black hover:bg-transparent transition-all border-2 border-primary hover:text-primary"
        >
          {component.cta.label}
        </Button>
      </div>
    </div>
  );
};

export default ContentCTASection;
