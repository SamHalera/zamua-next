import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const pathname = req.nextUrl.searchParams.get("pathname");

  let path: string = "";
  if (pathname) {
    path = `${pathname.split(",").join("/")}`;
  }

  console.log(path);
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/custom/getPageByPathname?pathname=${
      path.startsWith("uploads") ? "/" + path : path
    }`,
    // `${process.env.STRAPI_API_URL}/api/page-publics?populate=*`,
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
      cache: "no-cache",
    }
  );

  const data = await response.json();

  return Response.json(data);
}
