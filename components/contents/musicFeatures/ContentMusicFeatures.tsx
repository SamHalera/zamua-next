import NextImage from "@/components/NextImage";
import { Button } from "@/components/ui/button";

import React from "react";
import ContentMusicFeatureSingle from "./ContentMusicFeatureSingle";

const ContentMusicFeatures = ({
  component,
}: {
  component: TContentMusicFeatures;
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-20 bg-black py-32">
      {component.musicFeatureSingle.map((elt: TContentMusicFeatureSingle) => {
        return (
          <ContentMusicFeatureSingle key={elt.title} element={elt}>
            {elt.image && (
              <NextImage dataImage={elt.image} customClass="w-[500px] my-4" />
            )}
          </ContentMusicFeatureSingle>
        );
      })}
    </div>
  );
};

export default ContentMusicFeatures;
