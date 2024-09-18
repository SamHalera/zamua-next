export const getPlaylists = async () => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/custom/findPlaylists`,
    {
      headers: {
        "COntent-type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
      cache: "no-cache",
    }
  );

  const playlists = await response.json();
  return playlists;
};

export const getPlaylist = async (slug: string) => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/custom/findPlayListBySlug?slug=${slug}`,
    {
      headers: {
        "COntent-type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
      cache: "no-cache",
    }
  );

  const playlist = await response.json();
  return playlist;
};
