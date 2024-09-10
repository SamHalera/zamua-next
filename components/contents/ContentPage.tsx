import React from "react";
import ContentHero from "./hero/ContentHero";
import ContentCTASection from "./ctaSection/ContentCTASection";
import ContentText from "./text/ContentText";
import ContentMusicFeatures from "./musicFeatures/ContentMusicFeatures";

const ContentPage = ({ data }: { data: PageData }) => {
  console.log(data);
  if (data.dynamicZone && data.dynamicZone.length > 0) {
    const Component = ({ component }: { component: TComponent }) => {
      const { __component } = component;
      console.log(component);

      const NextComponent: { [key: string]: React.ReactNode } = {
        "contents.hero": __component === "contents.hero" && (
          <ContentHero component={component as TContentHero} />
        ),
        "contents.cta-section": __component === "contents.cta-section" && (
          <ContentCTASection component={component as TContentCTASection} />
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
