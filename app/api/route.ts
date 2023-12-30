import { NextResponse } from "next/server"

export function GET(): NextResponse {
  return NextResponse.json({ Hello: "Welcome to Front-end Boilerplate API" })
}
