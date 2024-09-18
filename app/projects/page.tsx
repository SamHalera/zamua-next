import { getProjects } from "@/actions/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectThumbnail from "@/components/projects/ProjectThumbnail";
import { formatTitle } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const page = async () => {
  const projects = await getProjects();

  return (
    <div className="">
      <ProjectHero />
      <div className="flex flex-wrap justify-center gap-12 py-10 mb-10">
        {projects.length > 0 &&
          projects.map((project: TProject) => {
            return <ProjectThumbnail key={project.id} project={project} />;
          })}
      </div>
    </div>
  );
};

export default page;
