import { Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const PlaylistThumbnail = ({
  playlist,
  index,
}: {
  playlist: TPlaylist;
  index: number;
}) => {
  return (
    <Link
      href={`/playlists/${index}/${playlist.slug}`}
      className="w-60 h-60 bg-cover bg-center rounded-md block shadow-lg group"
      style={{
        backgroundImage: `url(${process.env.STRAPI_API_URL}${playlist.imageCover.url})`,
      }}
    >
      <div className="w-60 h-60 bg-slate-900/50 rounded-md relative flex justify-center  group-hover:bg-slate-900/80 duration-700">
        <h3 className="text-primary text-xl font-semibold py-9 absolute top-11 duration-700 group-hover:top-8">
          {playlist.title}
        </h3>
        <Link2 className=" size-9 text-primary absolute bottom-10 opacity-0 duration-500 group-hover:bottom-24 group-hover:opacity-100"></Link2>
      </div>
    </Link>
  );
};

export default PlaylistThumbnail;
