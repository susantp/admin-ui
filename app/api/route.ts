import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.json({ Hello: "Welcome to Front-end Boilerplate API" })
}
