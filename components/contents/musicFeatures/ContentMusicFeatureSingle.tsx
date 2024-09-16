"use client";
import NextImage from "@/components/NextImage";
import { Button } from "@/components/ui/button";
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
    <div className="mb-48 flex flex-col items-center gap-6" key={element.title}>
      <div className="text-center flex flex-col gap-4 mb-8">
        <h2 className=" text-8xl">{element.title}</h2>
        <h3 className=" text-7xl">{element.subtitle}</h3>
      </div>
      <div>
        {element.image && children}

        <div dangerouslySetInnerHTML={{ __html: element.url_feature }} />
      </div>
      <div
        className="w-2/3 text-xl leading-9"
        dangerouslySetInnerHTML={{ __html: element.text }}
      />
      <Button
        onClick={() => {
          router.push(element.cta.path);
        }}
        className="self-center bg-primary text-black hover:bg-transparent transition-all border-2 border-primary hover:text-primary"
      >
        {element.cta.label}
      </Button>
    </div>
  );
};

export default ContentMusicFeatureSingle;
