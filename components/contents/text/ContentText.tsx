"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ContentText = ({ component }: { component: TContentText }) => {
  console.log(component);

  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-3/4 m-auto gap-8">
      <div dangerouslySetInnerHTML={{ __html: component.text }} />
      {component.cta && (
        <Button
          onClick={() => {
            router.push("/bio/");
          }}
          className="bg-primary"
        >
          {component.cta.label}
        </Button>
      )}
    </div>
  );
};

export default ContentText;
