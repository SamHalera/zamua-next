import { getProject } from "@/actions/projects";
import ProjectSingle from "@/components/projects/ProjectSingle";
import React from "react";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { slug } = params;
  const project = await getProject(slug);

  return (
    <div>
      <ProjectSingle project={project} />
    </div>
  );
};

export default page;
