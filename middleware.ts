import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { href, pathname, search, origin } = request.nextUrl;

  const isWeb = pathname.includes(".") === false;

  return NextResponse.next();
}
