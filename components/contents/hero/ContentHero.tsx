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
        className={cn("relative mb-12 bg-cover bg-bottom p-32 bg-fixed", {
          "h-screen": component.isHomePage,
        })}
        style={{
          backgroundImage: `url(/images/${component.optionsHero.bgImage})`,
        }}
      >
        <div className="flex justify-center items-center gap-16">
          <div className="">
            {component.image && (
              <Link
                href="https://ditto.fm/litanie-zamua"
                className="flex flex-col gap-8 items-center"
              >
                <NextImage dataImage={component.image} customClass="w-96" />
                {path === "/" && (
                  <div className="flex justify-between items-center gap-4">
                    <img
                      src={spotifyLogo.src}
                      alt="spotify logo"
                      className=" w-28"
                    />
                    <img
                      src={deezerLogo.src}
                      alt="spotify logo"
                      className=" w-28"
                    />
                    <img
                      src={appleLogo.src}
                      alt="spotify logo"
                      className=" w-28"
                    />
                  </div>
                )}
              </Link>
            )}
          </div>
          <div
            className="text-black text-7xl w-2/3"
            dangerouslySetInnerHTML={{ __html: formatTitle(component.title) }}
          />
        </div>
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

      <div id="toScroll" className=" mb-40"></div>
    </>
  );
};

export default ContentHero;
