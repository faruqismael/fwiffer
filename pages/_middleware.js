import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //   if (req.nextUrl.pathname === "/") {
  //     const session = await getSession({
  //       req,
  //       //   secret: process.env.JWT_SECRET,
  //       //   secureCookie: process.env.NODE_ENV === "production",
  //     });
  //     // You could also check for any property on the session object,
  //     // like role === "admin" or name === "John Doe", etc.
  //     console.log(session);
  //     //   if (!session) return NextResponse.redirect("http://localhost:3000/home");
  //     // If user is authenticated, continue.
  //   }
}
