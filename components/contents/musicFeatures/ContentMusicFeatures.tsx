import NextImage from "@/components/NextImage";
import { Button } from "@/components/ui/button";

import React from "react";
import ContentMusicFeatureSingle from "./ContentMusicFeatureSingle";

const ContentMusicFeatures = ({
  component,
}: {
  component: TContentMusicFeatures;
}) => {
  return component.musicFeatureSingle.map((elt: TContentMusicFeatureSingle) => {
    return (
      <ContentMusicFeatureSingle key={elt.title} element={elt}>
        <NextImage dataImage={elt.image} customClass="w-[400px] mb-4" />
      </ContentMusicFeatureSingle>
    );
  });
};

export default ContentMusicFeatures;
