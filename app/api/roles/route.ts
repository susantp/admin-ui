import { NextResponse } from "next/server"
import { fetchRoles } from "@/src/modules/roles/domain/services/role-service"
import { IFetchRolesOriginalData } from "@/src/modules/roles/domain/types/repository"

export async function GET(): Promise<NextResponse> {
  const rolesResponseData: IFetchRolesOriginalData | null = await fetchRoles()
  if (!rolesResponseData) NextResponse.json({ error: "fetch roles error" })
  return NextResponse.json(rolesResponseData)
}
