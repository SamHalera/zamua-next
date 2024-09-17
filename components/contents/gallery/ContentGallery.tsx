import NextImage from "@/components/NextImage";
import React from "react";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGalleryComponent from "./LightGalleryComponent";
import CaptionComponent from "./CaptionComponent";

const ContentGallery = ({ component }: { component: TContentGallery }) => {
  return (
    <div>
      <h2 className="text-6xl text-center font-semibold">{component.title}</h2>
      <div className="gap-8 columns-3 p-8 obj">
        <LightGalleryComponent images={component.image}>
          {component.image.length > 0 &&
            component.image.map((item: TMedia) => {
              let caption: string = "";
              if (item.caption) {
                caption = `<span class='credit'>Photo by <strong>${item.caption}</strong></span>`;
              }
              return (
                <a
                  key={item.id}
                  data-lg-size="1600-1067"
                  className=" cursor-pointer"
                  data-src={`${process.env.STRAPI_API_URL}${item.url}`}
                  data-sub-html={caption}
                >
                  <NextImage
                    dataImage={item}
                    customClass={`mb-4 object-cover object-top`}
                  />
                </a>
              );
            })}
        </LightGalleryComponent>
      </div>
    </div>
  );
};

export default ContentGallery;
