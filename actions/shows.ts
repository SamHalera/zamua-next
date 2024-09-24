export const getShows = async () => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}
/api/shows`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
      cache: "no-cache",
    }
  );
  const shows = await response.json();
  return shows;
};
