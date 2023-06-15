import { NextResponse } from "next/server"

export function GET() {
  throw new Error("API throw error test")
  return NextResponse.json({ name: "Sentry Error Test" })
}
