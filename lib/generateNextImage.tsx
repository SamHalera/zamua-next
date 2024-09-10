import Image from "next/image";
import React from "react";

const generateNextImage = (data: TMedia) => {
  const { STRAPI_API_URL } = process.env;
  return (
    <Image
      src={`${STRAPI_API_URL}${data.url}`}
      width={data.width}
      height={data.height}
      alt={data.alternativeText ?? ""}
    />
  );
};

export default generateNextImage;
