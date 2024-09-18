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
        className={cn("relative mb-12 bg-cover bg-bottom bg-fixed", {
          "h-[70vh]": component.optionsHero.height === "70",
        })}
        style={{
          backgroundImage: `url(/images/${component.optionsHero.bgImage})`,
        }}
      >
        <div className="bg-black/60 h-[70vh] flex items-center px-10">
          <div
            className="text-white font-bold text-7xl"
            dangerouslySetInnerHTML={{ __html: formatTitle(component.title) }}
          />

          {component.iconScroll && (
            <Link
              href="#toScroll"
              className="absolute left-2/4 -bottom-32 flex flex-col items-center gap-6"
            >
              <span
                className={cn("[writing-mode:vertical-lr] line-scroll", {
                  "text-primary": !component.isHomePage,
                })}
              >
                scroll
              </span>
              <div className=" w-[2px] h-60 bg-primary"></div>
            </Link>
          )}
        </div>
      </div>

      <div id="toScroll" className=" mb-40"></div>
    </>
  );
};

export default ContentSecondaryHero;
