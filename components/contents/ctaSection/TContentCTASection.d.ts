type TContentCTASection = {
  __component: string;
  id: number;
  title: string;
  text: string;
  btnLabel: string;
  btnUrl: string;
  ctaOptions: TCTAOptions;
};

type TCTAOptions = {
  positionYBlockText: "start" | "center" | "end";
  positionXBlockText: "start" | "center" | "end";
  bgImage: string;
  height: string;
};
