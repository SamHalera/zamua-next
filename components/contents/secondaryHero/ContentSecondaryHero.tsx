import { cn } from "@/lib/cn";
import { formatTitle } from "@/lib/utils";

import Link from "next/link";
const ContentSecondaryHero = ({
  component,
  path,
}: {
  component: TContentHero;
  path: string;
}) => {
  return (
    <>
      <div
        className={cn(
          "relative mb-12 bg-cover bg-bottom bg-scroll lg:bg-fixed",
          {
            "h-[40vh] lg:h-[70vh]": component.optionsHero.height === "70",
          }
        )}
        style={{
          backgroundImage: `url(/images/${component.optionsHero.bgImage})`,
        }}
      >
        <div className="bg-black/60 h-[40vh] lg:h-[70vh] flex items-center px-10">
          <div
            className="text-white font-bold text-center text-4xl sm:text-5xl md:text-6xlxl:text-7xl lg:text-start"
            dangerouslySetInnerHTML={{ __html: formatTitle(component.title) }}
          />

          {component.iconScroll && (
            <Link
              href="#toScroll"
              className="absolute left-2/4 -bottom-24 md:-bottom-32 hidden lg:flex flex-col items-center gap-6"
            >
              <span
                className={cn("[writing-mode:vertical-lr] line-scroll", {
                  "text-primary": !component.isHomePage,
                })}
              >
                scroll
              </span>
              <div className=" w-[2px]  h-28 md:h-36 lg:h-60  bg-primary"></div>
            </Link>
          )}
        </div>
      </div>

      <div id="toScroll" className="hidden lg:block mb-40"></div>
    </>
  );
};

export default ContentSecondaryHero;
