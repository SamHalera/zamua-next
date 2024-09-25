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
    <div className="relative flex flex-col items-center mb-28 lg:mb-60">
      <div className="mb-4 flex flex-col gap-8">
        <div
          className={cn(
            "text-center lg:text-start text-black font-bold text-4xl md:text-5xl md:w-[700px] z-10",
            {
              "text-primary":
                component.model === "primary" || component.model === "ternary",
            }
          )}
          dangerouslySetInnerHTML={{ __html: component.text }}
        />
        {component.cta && (
          <div className=" z-30 self-center lg:self-end">
            <Link
              className="bg-primary text-black font-semibold border-2 border-primary hover:bg-transparent hover:text-primary transition-all h-14 w-36 flex justify-center items-center "
              href={component.cta.path}
            >
              {component.cta.label}
            </Link>
          </div>
        )}
      </div>
      <div className="z-10">
        {component.image && (
          <NextImage
            dataImage={component.image}
            customClass="w-64 sm:w-96 md:w-[400px] lg:w-[500px]"
          />
        )}
      </div>
      <div
        className={cn("hidden lg:block lg:absolute right-80 top-20", {
          "bg-primary w-96 h-[500px]": component.model === "secondary",
          "bg-black w-[450px] h-[500px]":
            component.model === "primary" || component.model === "ternary",
        })}
      ></div>
      <div
        className={cn("hidden lg:block lg:absolute left-96 top-96", {
          "bg-[#E3A53F] w-[500px] h-96":
            component.model === "primary" || component.model === "secondary",
          "bg-[#FE015A] w-[500px] h-72": component.model === "ternary",
        })}
      ></div>
    </div>
  );
};

export default ContentFeatureText;
