type TComponent = {
  __component: string;
  id: number;
  title: string;
} & (TContentHero | TContentCTASection);
