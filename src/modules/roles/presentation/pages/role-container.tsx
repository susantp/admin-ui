"use client"

import React from "react"
import Section from "@/src/modules/dashboard/presentation/components/section"
import ActionLink from "@/src/modules/global/presentation/components/poc-action-link"
import PocContainer from "@/src/modules/global/presentation/components/poc-container"
import PocLoader from "@/src/modules/global/presentation/components/poc-loader"
import RoleList from "@/src/modules/roles/presentation/components/role-list"
import { RoleListWrapper } from "@/src/modules/roles/presentation/components/role-list-wrapper"
import useRoleContainerAction from "@/src/modules/roles/presentation/hooks/use-role-container-action"

export default function RoleContainer(): JSX.Element {
  const { roles, loading } = useRoleContainerAction()
  if (loading || !roles || !roles.results.length) return <PocLoader />
  return (
    <PocContainer>
      <Section
        label="Role Management"
        subLabel="Create, edit or delete roles"
        actionEl={<ActionLink path="/roles/create" />}
      >
        <RoleListWrapper>
          {roles.results.map((role) => (
            <RoleList role={role} key={role.id} />
          ))}
        </RoleListWrapper>
      </Section>
    </PocContainer>
  )
}
