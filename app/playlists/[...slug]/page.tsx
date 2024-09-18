import { getPlaylist } from "@/actions/playlists";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const playlist: TPlaylist = await getPlaylist(slug);

  return (
    <div className="flex flex-col items-center justify-center p-10 gap-6">
      <Link
        href={"/playlists"}
        target="_blank"
        className="self-start bg-primary text-black border-2 border-primary hover:bg-transparent hover:text-primary transition-all h-14 w-36 flex justify-center items-center "
      >
        back to playlists
      </Link>
      <h1 className="text-6xl">PLAY THE TAPE!</h1>
      <h2 className="text-4xl text-primary font-semibold">{playlist.title}</h2>
      <div
        className="w-2/3"
        dangerouslySetInnerHTML={{ __html: playlist.description }}
      />
      <div
        className="w-2/3"
        dangerouslySetInnerHTML={{ __html: playlist.iframe }}
      />
      <Link
        href={playlist.url}
        target="_blank"
        className="bg-primary text-black font-semibold border-2 border-primary hover:bg-transparent hover:text-primary transition-all h-14 w-36 flex justify-center items-center "
      >
        spotify
      </Link>
    </div>
  );
};

export default page;
