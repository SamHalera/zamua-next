type TContentMusicFeatures = {
  title: string;
  bgColor: string;
  musicFeatureSingle: TContentMusicFeatureSingle[];
};

type TContentMusicFeatureSingle = {
  id: number;
  title: string;
  subtitle: string;
  image: TMedia;
  url_feature: string;
  cta: TCta;
  text: string;
  isHoverDisplay: boolean;
};
