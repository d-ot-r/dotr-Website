// app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  return new NextResponse(
    JSON.stringify({ message: "Logged out successfully" }),
    {
      status: 200,
      headers: {
        "Set-Cookie": `token=; Path=/; HttpOnly; Max-Age=0; SameSite=Lax; ${
          process.env.NODE_ENV === "production" ? "Secure;" : ""
        }`,
        "Content-Type": "application/json",
      },
    }
  );
}
