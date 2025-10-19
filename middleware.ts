

import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("__auth")?.value;
    
    if (!token && request.nextUrl.pathname !== "/sign-in") {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|favicon.ico|api).*)", "/"]
}