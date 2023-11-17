import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    `${
      process.env.AUTH_ISSUER
    }/protocol/openid-connect/logout?redirect_uri=${encodeURIComponent(
      process.env.NEXTAUTH_URL!
    )}`
  );
}
