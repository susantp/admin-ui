import React from "react";
import RoleContainer
  from "@/src/modules/roles/presentation/pages/role-container";
import {
  IRoleList
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";
import {fetchRoles} from "@/src/modules/roles/domain/services/role-service";

export default async function Page(): Promise<JSX.Element | null> {
  const getRoles: IRoleList[] | null = await fetchRoles()
  if (!getRoles) return null
  return <RoleContainer roles={getRoles} />
}
