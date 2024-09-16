import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/page-publics?filters[type][$eq]=navigation`,
    {
      cache: "no-cache",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
    }
  );

  const { data } = await response.json();

  return Response.json(data);
}
