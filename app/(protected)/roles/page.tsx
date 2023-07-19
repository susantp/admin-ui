import React from "react";
import RoleContainer
  from "@/src/modules/roles/presentation/pages/role-container";
import {
  fetchRoles,
  IFetchRolesData, IFetchRolesOriginalData
} from "@/src/modules/roles/domain/services/role-service";

function mapApiResponseToIFetchRolesData(apiResponse: IFetchRolesOriginalData): IFetchRolesData {
  return {
    total: apiResponse.total,
    totalPage: apiResponse.total_page, // Mapping total_page to totalPage
    results: apiResponse.results,
  };
}
export default async function Page(): Promise<JSX.Element | null> {
  const rolesResponseData: IFetchRolesOriginalData | null = await fetchRoles()
  if (!rolesResponseData) return null
  const rolesMappedData: IFetchRolesData = mapApiResponseToIFetchRolesData(rolesResponseData)
  return <RoleContainer rolesData={rolesMappedData}/>
}
