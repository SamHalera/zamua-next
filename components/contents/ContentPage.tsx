import React from "react";
import dynamic from "next/dynamic";
// import ContentHero from "./hero/ContentHero";
// import ContentCTASection from "./ctaSection/ContentCTASection";
// import ContentText from "./text/ContentText";
// import ContentMusicFeatures from "./musicFeatures/ContentMusicFeatures";
// import ContentFeatureText from "./featureText/ContentFeatureText";
// import ContentCta from "./cta/ContentCta";
// import ContentSecondaryHero from "./secondaryHero/ContentSecondaryHero";
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
const ContentPage = ({ data }: { data: PageData }) => {
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
          />
        ),
        "contents.feature-text": __component === "contents.feature-text" && (
          <ContentFeatureText component={component as TContentFeatureText} />
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
