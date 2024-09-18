export const getPublicPage = async (path: string) => {
  const pathForRequest = path === "/" ? path : `/${path}/`;
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/custom/getPageByPathname?pathname=${
      path.startsWith("uploads") ? "/" + path : pathForRequest
    }`,

    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
      cache: "no-cache",
    }
  );

  const pageData: PageData = await response.json();
  return pageData;
};
