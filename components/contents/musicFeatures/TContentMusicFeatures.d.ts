type TContentMusicFeatures = {
  musicFeatureSingle: TContentMusicFeatureSingle[];
};

type TContentMusicFeatureSingle = {
  title: string;
  subtitle: string;
  image: TMedia;
  url_feature: string;
  cta: TCta;
  text: string;
  isHoverDisplay: boolean;
};
