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
import {FormikProps, useFormik} from "formik";
import {
  roleFormikConfig
} from "@/src/modules/roles/data/objects/role-formik-config";
import {IRoleFormValues} from "@/src/modules/roles/domain/types/crud";

export default function CreateRoleContainer(): React.ReactNode {
  const {loading, groupedData} = useCreateRoleContainerActions()

  const roleCreateForm: FormikProps<IRoleFormValues> = useFormik<IRoleFormValues>(roleFormikConfig)
  const {values, handleChange, setFieldValue} = roleCreateForm

  if (loading || !groupedData || !groupedData.length) return <PocLoader/>

  return (
    <PocContainer>
      <Section label="" subLabel={null} actionEl={null}>
        <RoleForm handleSubmit={roleCreateForm.handleSubmit}>
          <RoleFormTitle/>
          <RoleNameField nameValue={values.roleName}
                         handleChange={handleChange}/>
          <ScreenPermissionWrapper>
            <PocColDiv lgColCount={4} defaultColCount={2}>
              {groupedData.map((screen) => <ScreenPermissionBox
                handleSetFieldValues={setFieldValue}
                values={values.permissionValues}
                key={Math.random()}
                screenWithPermission={screen}
              />)}
            </PocColDiv>
          </ScreenPermissionWrapper>
          <RoleFormActions/>
        </RoleForm>
      </Section>
    </PocContainer>
  )
}

