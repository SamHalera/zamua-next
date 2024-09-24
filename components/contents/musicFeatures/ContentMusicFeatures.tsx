import NextImage from "@/components/NextImage";
import { Button } from "@/components/ui/button";

import React from "react";
import ContentMusicFeatureSingle from "./ContentMusicFeatureSingle";
import { cn } from "@/lib/utils";

const ContentMusicFeatures = ({
  component,
  path,
}: {
  component: TContentMusicFeatures;
  path: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center md:gap-8 lg:gap-20 py-32 px-10",
        {
          "bg-black": component.bgColor && component.bgColor === "black",
        }
      )}
    >
      {component.musicFeatureSingle.map((elt: TContentMusicFeatureSingle) => {
        return (
          <ContentMusicFeatureSingle key={elt.title} element={elt} path={path}>
            {elt.image && (
              <NextImage
                dataImage={elt.image}
                customClass="w-64 md:w-[320px]"
              />
            )}
          </ContentMusicFeatureSingle>
        );
      })}
    </div>
  );
};

export default ContentMusicFeatures;
