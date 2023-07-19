"use client"

import React from "react"
import Section from "@/src/modules/dashboard/presentation/components/section"
import ActionLink
  from "@/src/modules/global/presentation/components/poc-action-link"
import PocContainer
  from "@/src/modules/global/presentation/components/poc-container"
import PocLoader from "@/src/modules/global/presentation/components/poc-loader"
import PocRole from "@/src/modules/roles/presentation/components/poc-role"
import {
  PocRoleListWrapper
} from "@/src/modules/roles/presentation/components/poc-role-list-wrapper"
import useRoleContainerAction
  from "@/src/modules/roles/presentation/hooks/use-role-container-action"
import PocDialogBox
  from "@/src/modules/global/presentation/components/poc-dialog-box";

export default function RoleContainer(): JSX.Element {
  const {
    roles,
    loading,
    handleDelete,
    open,
    toggleDialog
  } = useRoleContainerAction()
  if (loading || !roles || !roles.results.length) return <PocLoader/>

  return (
    <PocContainer>
      <Section
        label="Role Management"
        subLabel="Create, edit or delete roles"
        actionEl={<ActionLink path="/roles/create"/>}
      >
        <PocRoleListWrapper>
          {roles.results.map((role) => <PocRole onDelete={handleDelete}
                                                role={role} key={role.id}/>)}
        </PocRoleListWrapper>
      </Section>

      {roles.results.length > 5 &&
        <Section actionEl={null} label="" subLabel="">
          <div className="flex w-full justify-center items-center">
            <button type="button"
                    className="primaryButtonStyle rounded-md text-2xl">
              Show More
            </button>
          </div>
        </Section>}

      <PocDialogBox open={open} onClose={toggleDialog} title="Feature not available" description="We will get back soon!" />
    </PocContainer>
  )
}
