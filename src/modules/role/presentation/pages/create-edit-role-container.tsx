"use client"

import React from "react"
import Section from "@/src/modules/dashboard/presentation/components/section"
import {appPaths} from "@/src/modules/global/domain/objects/global"
import PocContainer from "@/src/modules/global/presentation/components/poc-container"
import PocDialogBox from "@/src/modules/global/presentation/components/poc-dialog-box"
import PocColDiv from "@/src/modules/global/presentation/poc-col-div"
import RoleForm from "@/src/modules/role/presentation/components/role-form"
import RoleFormTitle from "@/src/modules/role/presentation/components/role-form-title"
import RoleFormActions from "@/src/modules/role/presentation/components/role-name-actions"
import RoleNameField from "@/src/modules/role/presentation/components/role-name-field"
import ScreenPermissionBox from "@/src/modules/role/presentation/components/screen-permission-box"
import ScreenPermissionWrapper from "@/src/modules/role/presentation/components/screen-permission-wrapper"
import useCreateEditRoleContainerActions
  from "@/src/modules/role/presentation/hooks/use-create-edit-role-container-actions"

interface ICreateEditRoleContainerProps {
  slug: string | null
}

export default function CreateEditRoleContainer({
  slug,
}: ICreateEditRoleContainerProps): React.ReactNode {
  const {
    loading,
    groupedData,
    roleCreateForm: {
      handleSubmit,
      errors,
      values,
      handleChange,
      setFieldValue,
      isSubmitting,
    },
    open,
    setIsOpen,
    apiError,
    helperTexts: {
      formSubtitle,
      formTitle,
      dialogBoxTitle,
      dialogBoxDescription,
    },
  } = useCreateEditRoleContainerActions({ slug })

  if (loading || !groupedData || !groupedData.length) return null

  return (
    <PocContainer>
      <Section label="" subLabel={null} actionEl={null}>
        <RoleForm handleSubmit={handleSubmit}>
          <RoleFormTitle title={formTitle} subtitle={formSubtitle} />
          <RoleNameField
            validationErrors={errors.name}
            nameValue={values.name}
            handleChange={handleChange}
          />
          <ScreenPermissionWrapper>
            <PocColDiv lgColCount={4} defaultColCount={2}>
              {groupedData.map((screen) => (
                <ScreenPermissionBox
                  handleSetFieldValues={setFieldValue}
                  values={values.permissions}
                  key={Math.random()}
                  screenWithPermission={screen}
                />
              ))}
            </PocColDiv>
          </ScreenPermissionWrapper>
          <RoleFormActions isSubmitting={isSubmitting} slug={slug} />
        </RoleForm>
      </Section>

      {apiError.message.length ? (
        <PocDialogBox
          title="Oops !"
          goBackPath={appPaths.roles.path}
          addNewPath={null}
          description={apiError.message}
          open={open}
          onClose={(): void => setIsOpen(!open)}
        />
      ) : (
        <PocDialogBox
          title={dialogBoxTitle}
          goBackPath={appPaths.roles.path}
          addNewPath={null}
          description={dialogBoxDescription}
          open={open}
          onClose={(): void => setIsOpen(!open)}
        />
      )}
    </PocContainer>
  )
}
