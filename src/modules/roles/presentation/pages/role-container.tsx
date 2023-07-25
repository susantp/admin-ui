"use client"

import React from "react"
import Section from "@/src/modules/dashboard/presentation/components/section"
import { appPaths } from "@/src/modules/global/domain/objects/global"
import ActionLink from "@/src/modules/global/presentation/components/poc-action-link"
import PocContainer from "@/src/modules/global/presentation/components/poc-container"
import PocDialogBox from "@/src/modules/global/presentation/components/poc-dialog-box"
import PocLoader from "@/src/modules/global/presentation/components/poc-loader"
import { ShowMoreButton } from "@/src/modules/global/presentation/components/poc-show-more-btn"
import PocRole from "@/src/modules/roles/presentation/components/poc-role"
import { PocRoleListWrapper } from "@/src/modules/roles/presentation/components/poc-role-list-wrapper"
import useRoleContainerActions from "@/src/modules/roles/presentation/hooks/use-role-container-actions"

export default function RoleContainer(): React.ReactNode {
  const { roles, loading, handleDelete, open, toggleDialog } =
    useRoleContainerActions()
  if (loading || !roles || !roles.results.length) return <PocLoader />
  const { results, total } = roles
  return (
    <PocContainer>
      <Section
        label="Role Management"
        subLabel="Create, edit or delete roles"
        actionEl={<ActionLink path={appPaths.createRole.path("")} />}
      >
        <PocRoleListWrapper>
          {results.map((role) => (
            <PocRole onDelete={handleDelete} role={role} key={role.id} />
          ))}
        </PocRoleListWrapper>
      </Section>
      <Section subLabel={null} label={null} actionEl={null}>
        <p className="px-2">Total {total} records </p>
      </Section>
      <Section actionEl={null} label="" subLabel="">
        <ShowMoreButton itemCount={results.length} />
      </Section>

      <PocDialogBox
        open={open}
        onClose={toggleDialog}
        title="Feature not available"
        description="We will get back soon!"
      />
    </PocContainer>
  )
}
