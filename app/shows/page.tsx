import { getShows } from "@/actions/shows";
import dayjs from "dayjs";
import { Link2, LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = async () => {
  const shows = await getShows();
  const { data } = shows;

  return (
    <div className="py-12">
      <div className="flex flex-col gap-10 items-center">
        <h1 className=" font-bold text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-14">
          SHOWS
        </h1>
        {data?.length > 0 ? (
          data.map((show: TShow) => {
            return (
              <div
                key={show.id}
                className="bg-black flex-col lg:flex-row flex gap-6 items-center justify-center w-2/3 py-10 px-5"
              >
                <div>
                  <div className="text-white font-semibold">
                    {dayjs(show.attributes.datetime).format("DD-MM-YYYY HH:mm")}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-around gap-8">
                  <div className="text-white text-center font-semibold">
                    <span className="font-semibold">
                      {show.attributes.name}
                    </span>
                  </div>
                  <div className="text-primary flex gap-2 items-center justify-center">
                    {show.attributes.venue_url ? (
                      <Link
                        className="text-center hover:text-primary/80 duration-700"
                        href={
                          show.attributes.venue_url
                            ? show.attributes.venue_url
                            : ""
                        }
                      >
                        {show.attributes.venue}
                      </Link>
                    ) : (
                      <span className="text-center">
                        {show.attributes.venue}
                      </span>
                    )}
                  </div>
                  <div className="text-primary flex gap-2 items-center justify-center">
                    {show.attributes.location_url ? (
                      <Link
                        className="text-center hover:text-primary/70 duration-700"
                        href={
                          show.attributes.location_url
                            ? show.attributes.location_url
                            : ""
                        }
                      >
                        {show.attributes.location}
                      </Link>
                    ) : (
                      <span>{show.attributes.location}</span>
                    )}
                  </div>
                  <div className="text-primary">
                    {show.attributes.ticket_url && (
                      <Link
                        className="text-center hover:text-primary/70 duration-700"
                        href={show.attributes.ticket_url}
                      >
                        TICKETS
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h2 className="text-primary font-bold text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-14">
              New shows are coming soon.
            </h2>
            <h3 className="text-primary font-bold text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-14">
              Stay tuned!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
