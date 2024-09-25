"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ContentText = ({ component }: { component: TContentText }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col px-8 sm:px-10 md:px-24 lg:px-48 mx-auto sm:mb-4 md:mb-14 lg:mb-16">
      <div
        className=" text-xl leading-9 mb-9"
        dangerouslySetInnerHTML={{ __html: component.text }}
      />
      {component.cta && (
        <Button
          onClick={() => {
            router.push(component.cta.path);
          }}
          className="self-center bg-primary text-black hover:bg-transparent transition-all border-2 border-primary hover:text-primary"
        >
          {component.cta.label}
        </Button>
      )}
    </div>
  );
};

export default ContentText;
