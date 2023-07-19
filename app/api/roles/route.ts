import { NextResponse } from "next/server"
import {
  IFetchRolesData,
  IFetchRolesOriginalData,
  fetchRoles,
} from "@/src/modules/roles/domain/services/role-service"

export function mapApiResponseToIFetchRolesData(
  apiResponse: IFetchRolesOriginalData
): IFetchRolesData {
  return {
    total: apiResponse.total,
    totalPage: apiResponse.total_page, // Mapping total_page to totalPage
    results: apiResponse.results,
  }
}

export async function GET(): Promise<NextResponse> {
  const rolesResponseData: IFetchRolesOriginalData | null = await fetchRoles()
  if (!rolesResponseData) NextResponse.json({ error: "fetch roles error" })
  return NextResponse.json(rolesResponseData)
}
