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
  virtualProjects?: TVirtualProjects[];
};

type TProject = {
  id: number;
  slug: string;
  main_title: string;
  first_title: string;
  second_title: string;
  priority: number;
  description: string;
  imageCover: TMedia;

  project_members: TProjectMember[];
  Gallery: TContentGallery;
};

type TProjectMember = {
  id: number;
  name: string;
  roles: string;
};

type TPlaylist = {
  id: number;
  title: string;
  imageCover: TMedia;
  url: string;
  iframe: string;
  description: string;
  slug: string;
};
