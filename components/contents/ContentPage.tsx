import React from "react";
import dynamic from "next/dynamic";
import ContentMediaFrames from "./mediaFrames/ContentMediaFrames";

const ContentHero = dynamic(
  () => import("@/components/contents/hero/ContentHero")
);
const ContentCTASection = dynamic(
  () => import("@/components/contents/ctaSection/ContentCTASection")
);
const ContentText = dynamic(
  () => import("@/components/contents/text/ContentText")
);
const ContentMusicFeatures = dynamic(
  () => import("./musicFeatures/ContentMusicFeatures")
);
const ContentFeatureText = dynamic(
  () => import("./featureText/ContentFeatureText")
);
const ContentCta = dynamic(
  () => import("@/components/contents/cta/ContentCta")
);
const ContentSecondaryHero = dynamic(
  () => import("@/components/contents/secondaryHero/ContentSecondaryHero")
);
const ContentGallery = dynamic(
  () => import("@/components/contents/gallery/ContentGallery")
);
const ContentPage = async ({ data }: { data: PageData }) => {
  if (data.dynamicZone && data.dynamicZone.length > 0) {
    const Component = ({ component }: { component: TComponent }) => {
      const { __component } = component;

      const NextComponent: { [key: string]: React.ReactNode } = {
        "contents.hero": __component === "contents.hero" && (
          <ContentHero component={component as TContentHero} path={data.path} />
        ),
        "contents.secondary-hero": __component ===
          "contents.secondary-hero" && (
          <ContentSecondaryHero
            component={component as TContentSecondaryHero}
            path={data.path}
          />
        ),
        "contents.cta-section": __component === "contents.cta-section" && (
          <ContentCTASection component={component as TContentCTASection} />
        ),
        "contents.cta": __component === "contents.cta" && (
          <ContentCta component={component as TCta} />
        ),
        "contents.text": __component === "contents.text" && (
          <ContentText component={component as TContentText} />
        ),
        "contents.music-features": __component ===
          "contents.music-features" && (
          <ContentMusicFeatures
            component={component as TContentMusicFeatures}
            path={data.path}
          />
        ),
        "contents.feature-text": __component === "contents.feature-text" && (
          <ContentFeatureText component={component as TContentFeatureText} />
        ),
        "contents.galery": __component === "contents.galery" && (
          <ContentGallery component={component as TContentGallery} />
        ),
        "contents.media-frames": __component === "contents.media-frames" && (
          <ContentMediaFrames component={component as TContentMediaFrames} />
        ),
      };
      return NextComponent[__component];
    };
    return (
      <>
        {data.dynamicZone.map((component) => {
          return (
            <Component
              key={"component-" + component.id}
              component={component}
            />
          );
        })}
      </>
    );
  }
  return null;
};

export default ContentPage;
