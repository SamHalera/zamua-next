"use client";
import NextImage from "@/components/NextImage";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ContentMusicFeatureSingle = ({
  element,
  children,
}: {
  element: TContentMusicFeatureSingle;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <div className="mb-20 flex flex-col items-center gap-6" key={element.title}>
      <div className="text-center flex flex-col gap-4 h-28">
        <h2 className="text-white text-5xl">{element.title}</h2>
        <h3 className="text-white text-2xl">{element.subtitle}</h3>
      </div>
      <div className="relative flex flex-col items-center iframe-container">
        {element.image && children}

        <div
          className=""
          dangerouslySetInnerHTML={{ __html: element.url_feature }}
        />
      </div>
      <div
        className="w-2/3 text-xl leading-9"
        dangerouslySetInnerHTML={{ __html: element.text }}
      />
      {element.cta && (
        <Link
          href={element.cta.path}
          target="_blank"
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
