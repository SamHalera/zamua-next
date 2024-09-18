import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const NextImage = ({
  dataImage,
  customClass,
}: {
  dataImage: TMedia;
  customClass?: string;
}) => {
  const { STRAPI_API_URL } = process.env;

  return (
    <Image
      className={customClass}
      src={`${STRAPI_API_URL}${dataImage.url}`}
      width={dataImage.width}
      height={dataImage.height}
      alt={dataImage.alternativeText ?? ""}
    />
  );
};

export default NextImage;
