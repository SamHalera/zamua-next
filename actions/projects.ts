export const getProjects = async () => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/projects?populate=imageCover,images,project_members`,
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
      cache: "no-cache",
    }
  );
  const { data } = await response.json();
  return data;
};
