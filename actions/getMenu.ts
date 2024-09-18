export const getMenu = async (type: string) => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/page-publics?filters[type][$eq]=${type}`,
      {
        cache: "no-cache",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
        },
      }
    );

    const { data } = await response.json();
    return data;
  } catch (error) {
    return { error: "Error from get menu" };
  }
};
