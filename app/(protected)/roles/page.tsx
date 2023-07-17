import React from "react";
import RoleContainer
  from "@/src/modules/roles/presentation/pages/role-container";
import roleService from "@/src/modules/roles/domain/services/role-service";
import {IRoleService} from "@/src/modules/roles/domain/types/repository";

export  default function Page(): JSX.Element{
  const service: IRoleService = roleService
  return <RoleContainer service={service} />
}
