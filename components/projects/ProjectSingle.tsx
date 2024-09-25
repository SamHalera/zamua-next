import React from "react";
import NextImage from "../NextImage";
import Link from "next/link";
import { formatTitle } from "@/lib/utils";
import ContentGallery from "../contents/gallery/ContentGallery";

const ProjectSingle = ({ project }: { project: TProject }) => {
  return (
    <>
      <div className="p-6 md:p-16">
        <Link
          className="mb-6 bg-primary text-black border-2 border-primary hover:bg-transparent hover:text-primary transition-all h-14 w-36 flex justify-center items-center "
          href={"/projects#toScroll"}
        >
          back to projects
        </Link>
        <div className="flex flex-col items-center w-full gap-6">
          <h1
            className="text-5xl font-semibold text-center md:text-start"
            dangerouslySetInnerHTML={{
              __html: formatTitle(project.main_title.toUpperCase()),
            }}
          />

          <div className="flex flex-col md:flex-row gap-11 md:items-end items-center md:justify-center">
            <NextImage
              dataImage={project.imageCover}
              customClass="w-[300px] shadow-lg"
            />
            <div className="flex flex-col gap-7">
              <div className="px-4 border-l-4 border-primary">
                {project.project_members.map((member: TProjectMember) => {
                  return (
                    <div key={member.id} className=" italic">
                      <span className="font-semibold">{member.name}</span>
                      <span> - {member.roles}</span>
                    </div>
                  );
                })}
              </div>
              <div dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
          </div>
        </div>
      </div>
      {project.Gallery?.image?.length > 0 && (
        <div className=" mx-auto flex justify-center">
          <div className="w-full md:w-2/3 ">
            <ContentGallery component={project.Gallery} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectSingle;
