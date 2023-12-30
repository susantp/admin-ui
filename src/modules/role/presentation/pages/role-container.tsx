"use client"

import React from "react"
import Section from "@/src/modules/dashboard/presentation/components/section"
import { appPaths } from "@/src/modules/global/domain/objects/global"
import ActionLink from "@/src/modules/global/presentation/components/poc-action-link"
import PocContainer from "@/src/modules/global/presentation/components/poc-container"
import PocDialogBox from "@/src/modules/global/presentation/components/poc-dialog-box"
import PocLoader from "@/src/modules/global/presentation/components/poc-loader"
import { ShowMoreButton } from "@/src/modules/global/presentation/components/poc-show-more-btn"
import DeleteConfirmModal from "@/src/modules/role/presentation/components/delete-confirm-modal"
import PocRole from "@/src/modules/role/presentation/components/poc-role"
import { PocRoleListWrapper } from "@/src/modules/role/presentation/components/poc-role-list-wrapper"
import useRoleContainerActions from "@/src/modules/role/presentation/hooks/use-role-container-actions"

export default function RoleContainer(): React.ReactNode {
  const {
    roles,
    loading,
    handleDelete,
    openModal,
    toggleModal,
    handleConfirmDelete,
    deletionRole,
    openDialog,
    toggleDialog,
    dialogBoxLabels,
  } = useRoleContainerActions()
  if (loading || !roles || !roles.results.length) return <PocLoader />
  const { results, total } = roles
  const { title, description } = dialogBoxLabels
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
        open={openDialog}
        onClose={toggleDialog}
        title={title}
        description={description}
        goBackPath={appPaths.roles.path}
        addNewPath={null}
      />
      <DeleteConfirmModal
        isOpen={openModal}
        closeModal={toggleModal}
        handleDelete={handleConfirmDelete}
        role={deletionRole}
      />
    </PocContainer>
  )
}
