import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const pathname = req.nextUrl.searchParams.get("pathname");

  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/custom/getPageByPathname?pathname=${pathname}`,
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return Response.json(data);
}
