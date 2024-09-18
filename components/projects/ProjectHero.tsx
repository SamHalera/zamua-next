import { formatTitle } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ProjectHero = () => {
  return (
    <>
      <div
        className="relative mb-12 bg-cover bg-bottom bg-fixed h-[70vh]"
        style={{
          backgroundImage: "url(/images/bg-projects.jpg)",
        }}
      >
        <div className="bg-black/60 h-[70vh] flex items-center px-10">
          <div
            className="text-white font-bold text-7xl"
            dangerouslySetInnerHTML={{ __html: formatTitle("**PROJECTS**") }}
          />
          <Link
            href="#toScroll"
            className="absolute left-2/4 -bottom-32 flex flex-col items-center gap-6"
          >
            <span className="[writing-mode:vertical-lr] line-scroll text-primary">
              scroll
            </span>
            <div className=" w-[2px] h-60 bg-primary"></div>
          </Link>
        </div>
      </div>
      <div id="toScroll" className=" mb-40"></div>
    </>
  );
};

export default ProjectHero;
