import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //   console.log("request.nextUrl==>", request.nextUrl);

  const { href, pathname, search, origin } = request.nextUrl;

  const isWeb = pathname.includes(".") === false;

  if (isWeb) {
    if (pathname === "/home/") {
      console.log("isWeb");
      const redirectUrl = request.url.replace(pathname, "/");
      console.log("request.url==>", request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}
