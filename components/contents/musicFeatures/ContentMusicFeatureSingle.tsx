"use client";
import NextImage from "@/components/NextImage";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ContentMusicFeatureSingle = ({
  element,
  children,
  path,
}: {
  element: TContentMusicFeatureSingle;
  children: React.ReactNode;
  path: string;
}) => {
  const router = useRouter();

  return (
    <div className="mb-20 flex flex-col items-center gap-6" key={element.title}>
      <div
        className={cn("text-center flex flex-col gap-4 h-28", {
          "h-44": path === "/",
        })}
      >
        <h2
          className={cn("text-white text-5xl", {
            "text-black text-8xl": path === "/",
          })}
        >
          {element.title}
        </h2>
        <h3
          className={cn("text-white text-2xl", {
            "text-black text-7xl": path === "/",
          })}
        >
          {element.subtitle}
        </h3>
      </div>
      <div id="iframe-container" className=" flex flex-col items-center">
        {element.image && children}

        <div
          className=" w-full"
          id={element.id.toString()}
          dangerouslySetInnerHTML={{ __html: element.url_feature }}
        />
      </div>
      <div
        className="lg:w-2/3 text-xl leading-9"
        dangerouslySetInnerHTML={{ __html: element.text }}
      />
      {element.cta && (
        <Link
          href={element.cta.path}
          className="self-center bg-primary text-black hover:bg-transparent transition-all border-2 border-primary hover:text-primary h-12 px-6 py-2 font-bold block"
          // className={cn(buttonVariants({ variant: "default" }))}
        >
          {element.cta.label.toUpperCase()}
        </Link>
      )}
    </div>
  );
};

export default ContentMusicFeatureSingle;
