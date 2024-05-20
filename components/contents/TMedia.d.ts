type TMedia = {
  id: number;
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
};
type FormatName = "thumbnail" | "large" | "small" | "medium" | "xlarge";

type Formats = {
  thumbnail: Thumbnail;
  large: Thumbnail;
  small: Thumbnail;
  medium: Thumbnail;
  xlarge: Thumbnail;
};

type Thumbnail = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
};
