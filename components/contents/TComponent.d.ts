type TComponent = {
  __component: string;
  id: number;
  title: string;
} & (
  | TContentHero
  | TContentCTASection
  | TContentText
  | TContentMusicFeatures
  | TContentFeatureText
  | TCta
  | TContentSecondaryHero
  | TContentGallery
  | TContentMediaFrames
);
