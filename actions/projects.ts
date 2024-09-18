export const getProjects = async () => {
  const projects = await fetch(
    // `${process.env.STRAPI_API_URL}/api/projects?populate=imageCover,images,project_members`,
    `${process.env.STRAPI_API_URL}/api/custom/getProjects`,
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
      cache: "no-cache",
    }
  );

  // const { data } = await response.json();
  const data = await projects.json();
  return data;
};

export const getProject = async (slug: string) => {
  const response = await fetch(
    // `${process.env.STRAPI_API_URL}/api/projects?populate=imageCover,images,project_members`,
    `${process.env.STRAPI_API_URL}/api/custom/findProjectBySlug?slug=${slug}`,
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
      cache: "no-cache",
    }
  );

  // const { data } = await response.json();
  const project = await response.json();
  return project;
};
