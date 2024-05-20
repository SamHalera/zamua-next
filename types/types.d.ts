type MenuItem = {
  id: number;
  label: string;
  path: string;
};
type Menu = MenuItem[];

type PagePublic = {
  id: number;
  attributes: {
    title: string;
    path: string;
    type: string;
  };
};

type PageData = {
  id: number;
  title: string;
  path: string;
  type: "navigation";
  dynamicZone: TComponent[];
};
