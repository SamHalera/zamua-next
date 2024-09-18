"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import { LightGallery as ILightGallery } from "lightgallery/lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const LightGalleryComponent = ({
  images,
  children,
}: {
  images: TMedia[];
  children: React.ReactNode;
}) => {
  const randomAspect = () => {
    const randomIndex = Math.floor(Math.random() * 2);

    return randomIndex === 0 ? "aspect-square" : "aspect-video";
  };
  return (
    <LightGallery
      // dynamic={true}
      elementClassNames={"masonry-gallery-demo"}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      {children}
    </LightGallery>
  );
};

export default LightGalleryComponent;
