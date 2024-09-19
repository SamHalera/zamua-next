import NextImage from "@/components/NextImage";
import { cn } from "@/lib/cn";
import { formatTitle } from "@/lib/utils";
import spotifyLogo from "@/public/images/spotify-logo-black.png";
import deezerLogo from "@/public/images/deezer.png";
import appleLogo from "@/public/images/apple-music.svg";
import Link from "next/link";
const ContentHero = ({
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
          "relative mb-12 bg-cover bg-bottom px-8 py-24 lg:p-32 bg-scroll lg:bg-fixed flex justify-center h-auto",
          {
            "lg:h-screen":
              component.isHomePage || component.optionsHero.height === "100",
          }
        )}
        style={{
          backgroundImage: `url(/images/${component.optionsHero.bgImage})`,
        }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
          <div className="">
            {component.image && (
              <Link
                href="https://ditto.fm/litanie-zamua"
                className="flex flex-col gap-8 items-center"
              >
                <NextImage
                  dataImage={component.image}
                  customClass="lg:w-96 w-72 shadow-lg"
                />
                {path === "/" && (
                  <div className="flex justify-between items-center gap-4">
                    <img
                      src={spotifyLogo.src}
                      alt="spotify logo"
                      className="w-20 lg:w-28 "
                    />
                    <img
                      src={deezerLogo.src}
                      alt="spotify logo"
                      className="w-20 lg:w-28"
                    />
                    <img
                      src={appleLogo.src}
                      alt="spotify logo"
                      className="w-20 lg:w-28"
                    />
                  </div>
                )}
              </Link>
            )}
          </div>
          <div
            className="text-black font-normal text-center text-4xl sm:text-5xl md:text-6xl lg:text-start w-full xl:text-7xl lg:w-2/3 mb-3"
            dangerouslySetInnerHTML={{ __html: formatTitle(component.title) }}
          />
        </div>
        {component.iconScroll && (
          <Link
            href="#toScroll"
            className="absolute left-2/4 -bottom-24 md:-bottom-32 flex flex-col items-center gap-6"
          >
            <span
              className={cn("[writing-mode:vertical-lr] line-scroll", {
                "text-primary": !component.isHomePage,
              })}
            >
              scroll
            </span>
            <div className=" w-[2px] h-28 md:h-36 lg:h-60 bg-primary"></div>
          </Link>
        )}
      </div>
      {component.iconScroll && <div id="toScroll" className=" mb-40"></div>}
    </>
  );
};

export default ContentHero;
