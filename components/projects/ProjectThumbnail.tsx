import Link from "next/link";
import React from "react";

const ProjectThumbnail = ({ project }: { project: TProject }) => {
  return (
    <Link href={`${process.env.NEXT_PUBLIC_FRONT}/projects/${project.slug}`}>
      <div
        className="h-[400px] w-[400px] bg-cover bg-bottom shadow-lg group"
        style={{
          backgroundImage: `url(${process.env.STRAPI_API_URL}${project.imageCover.url})`,
        }}
      >
        <div className="h-[400px] w-[400px] bg-black/50 transition-all hover:bg-black/80 flex justify-center items-center ">
          <div className="h-[330px] w-[330px] border border-primary flex justify-center items-center gap-2 relative">
            <h3 className="absolute left-10 bottom-16 text-primary text-[18px] font-semibold duration-500 group-hover:bottom-24">
              {project.first_title.toUpperCase()}
            </h3>
            <div className="absolute left-[120px] bottom-14 bg-primary w-[2px] h-0 group-hover:h-14 duration-500"></div>
            <h3 className="absolute left-32 bottom-16 text-primary text-[18px] font-semibold duration-500 group-hover:bottom-14">
              {project.second_title.toUpperCase()}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectThumbnail;
