import { formatTitle } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ProjectHero = () => {
  return (
    <>
      <div
        className="relative lg:mb-12 bg-cover bg-bottom bg-scroll lg:bg-fixed h-[40vh] lg:h-[70vh] "
        style={{
          backgroundImage: "url(/images/bg-projects.jpg)",
        }}
      >
        <div className="bg-black/60 h-[40vh] lg:h-[70vh] flex items-center px-10">
          <div
            className="text-white font-bold text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl lg:text-start"
            dangerouslySetInnerHTML={{ __html: formatTitle("**PROJECTS**") }}
          />
          <Link
            href="#toScroll"
            className="absolute left-2/4 -bottom-24 md:-bottom-32 hidden lg:flex flex-col items-center gap-6"
          >
            <span className="[writing-mode:vertical-lr] line-scroll text-primary">
              scroll
            </span>
            <div className=" w-[2px]  h-28 md:h-36 lg:h-60  bg-primary"></div>
          </Link>
        </div>
      </div>
      <div id="toScroll" className="hidden lg:block mb-40"></div>
    </>
  );
};

export default ProjectHero;
