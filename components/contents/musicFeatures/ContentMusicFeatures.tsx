import NextImage from "@/components/NextImage";
import React from "react";

const ContentMusicFeatures = ({
  component,
}: {
  component: TContentMusicFeatures;
}) => {
  console.log(component);
  return component.musicFeatureSingle.map((elt: TContentMusicFeatureSingle) => {
    return (
      <div key={elt.title}>
        <div>
          <h2>{elt.title}</h2>
          <h3>{elt.subtitle}</h3>
        </div>
        <div>
          {elt.image && <NextImage dataImage={elt.image} />}

          <div dangerouslySetInnerHTML={{ __html: elt.url_feature }} />
        </div>
      </div>
    );
  });
};

export default ContentMusicFeatures;
