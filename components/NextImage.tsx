import Image from "next/image";
import React from "react";

const NextImage = ({ dataImage }: { dataImage: TMedia }) => {
  const { STRAPI_API_URL } = process.env;
  return (
    <Image
      src={`${STRAPI_API_URL}${dataImage.url}`}
      width={dataImage.width}
      height={dataImage.height}
      alt={dataImage.alternativeText ?? ""}
    />
  );
};

export default NextImage;
