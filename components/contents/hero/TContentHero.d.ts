type TContentHero = {
  __component: string;
  id: number;
  title: string;
  text: string;
  iconScroll: boolean;
  image: TMedia;
  isHomePage: boolean;
  optionsHero: TOptionsHero;
};

type TOptionsHero = {
  bgImage: string;
  positionYText: "start" | "center" | "end";
  positionXText: "start" | "center" | "end";
  height: string;
};
