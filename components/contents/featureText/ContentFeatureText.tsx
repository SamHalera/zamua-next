import NextImage from "@/components/NextImage";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ContentFeatureText = ({
  component,
}: {
  component: TContentFeatureText;
}) => {
  return (
    <div className="relative flex flex-col items-center mb-60">
      <div
        className={cn(
          "text-center text-black font-bold text-5xl w-[600px] mb-10 z-10",
          {
            "text-primary": component.model === "primary",
          }
        )}
        dangerouslySetInnerHTML={{ __html: component.text }}
      />
      <div className="z-10">
        {component.image && (
          <NextImage dataImage={component.image} customClass="w-[500px]" />
        )}
      </div>
      <div
        className={cn("absolute right-80 top-11", {
          "bg-primary w-96 h-[500px]": component.model === "secondary",
          "bg-black w-[450px] h-[500px]":
            component.model === "primary" || component.model === "ternary",
        })}
      ></div>
      <div
        className={cn("absolute left-96 top-96", {
          "bg-[#E3A53F] w-[500px] h-96":
            component.model === "primary" || component.model === "secondary",
          "bg-[#FE015A] w-[500px] h-96": component.model === "ternary",
        })}
      ></div>

      {component.cta && (
        <Link
          className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          href={component.cta.path}
        >
          {component.cta.label}
        </Link>
      )}
    </div>
  );
};

export default ContentFeatureText;
