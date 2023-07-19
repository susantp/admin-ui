import React from "react";
import RoleContainer
  from "@/src/modules/roles/presentation/pages/role-container";
import {
  fetchRoles,
  IFetchRolesData
} from "@/src/modules/roles/domain/services/role-service";


export default async function Page(): Promise<JSX.Element | null> {
  const rolesData: IFetchRolesData | null = await fetchRoles()
  if (!rolesData) return null
  return <RoleContainer rolesData={rolesData}/>
}
