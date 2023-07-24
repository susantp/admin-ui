"use client"

import React from "react"
import Section from "@/src/modules/dashboard/presentation/components/section"
import PocContainer
  from "@/src/modules/global/presentation/components/poc-container"
import PocLoader from "@/src/modules/global/presentation/components/poc-loader"
import ScreenPermissionBox
  from "@/src/modules/roles/presentation/components/screen-permission-box"
import useCreateRoleContainerActions
  from "@/src/modules/roles/presentation/hooks/use-create-role-container-actions"
import ScreenPermissionWrapper
  from "@/src/modules/roles/presentation/components/screen-permission-wrapper";
import RoleForm from "@/src/modules/roles/presentation/components/role-form";
import RoleFormTitle
  from "@/src/modules/roles/presentation/components/role-form-title";
import RoleNameField
  from "@/src/modules/roles/presentation/components/role-name-field";
import RoleFormActions
  from "@/src/modules/roles/presentation/components/role-name-actions";
import PocColDiv from "@/src/modules/global/presentation/poc-col-div";
import PocDialogBox
  from "@/src/modules/global/presentation/components/poc-dialog-box";
import {appPaths} from "@/src/modules/global/domain/objects/global";

export default function CreateRoleContainer(): React.ReactNode {
  const {
    loading,
    groupedData,
    roleCreateForm,
    open,
    setIsOpen,
    apiError
  } = useCreateRoleContainerActions()

  if (loading || !groupedData || !groupedData.length) return <PocLoader/>

  const {
    handleSubmit,
    errors,
    values,
    handleChange,
    setFieldValue
  } = roleCreateForm
  return (
    <PocContainer>
      <Section label="" subLabel={null} actionEl={null}>
        <RoleForm handleSubmit={handleSubmit}>
          <RoleFormTitle/>
          <RoleNameField validationErrors={errors.name}
                         nameValue={values.name}
                         handleChange={handleChange}/>
          <ScreenPermissionWrapper>
            <PocColDiv lgColCount={4} defaultColCount={2}>
              {groupedData.map((screen) => <ScreenPermissionBox
                handleSetFieldValues={setFieldValue}
                values={values.permissions}
                key={Math.random()}
                screenWithPermission={screen}
              />)}
            </PocColDiv>
          </ScreenPermissionWrapper>
          <RoleFormActions isSubmitting={roleCreateForm.isSubmitting}/>
        </RoleForm>
      </Section>

      {
        apiError.message.length
          ? <PocDialogBox title="Oops !"
                          goBackPath={appPaths.roles.path}
                          addNewPath={null}
                          description={apiError.message} open={open}
                          onClose={(): void => setIsOpen(!open)}/>
          : <PocDialogBox title="New Role Added"
                          goBackPath={appPaths.roles.path}
                          addNewPath={`${appPaths.roles.path}/create`}
                          description="new role added successfully" open={open}
                          onClose={(): void => setIsOpen(!open)}/>
      }
    </PocContainer>
  )
}

