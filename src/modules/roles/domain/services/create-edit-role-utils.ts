import {
  IGroupedScreenWithPermissions,
  IPermission
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";
import * as Yup from "yup";
import {FormikConfig} from "formik/dist/types";
import {
  IGetFormikHookParams,
  IGetGroupedData,
  IGetHelperTextsParams,
  IGetPermissionIdsProps,
  IHandleFormSubmitResponseParams,
  IHelperTexts,
  IRoleFormValues
} from "../types/service";

export const getGroupedData = ({permissions}: IGetGroupedData): IGroupedScreenWithPermissions[] => permissions.reduce<IGroupedScreenWithPermissions[]>(
  (acc: IGroupedScreenWithPermissions[], obj: IPermission) => {
    const {screen, id, code} = obj
    const existingEntry: IGroupedScreenWithPermissions | undefined =
      acc.find((entry) => entry.screen === screen)

    if (existingEntry) {
      existingEntry.permissions.push({id, code})
    } else {
      acc.push({screen, permissions: [{id, code}]})
    }

    return acc
  },
  []
)

export const getRoleFormSchema = (): Yup.ObjectSchema<IRoleFormValues> => Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required !!!'),
  permissions: Yup.array().of(Yup.string().required('Required')).min(0).required('Required'),
})

export const getRoleFormikConfig = <T extends object>({
                                                        initialValues,
                                                        formSchema,
                                                        handleSubmit
                                                      }: IGetFormikHookParams<T>): FormikConfig<T> => ({
  enableReinitialize: true,
  initialValues,
  validationSchema: formSchema,
  onSubmit: handleSubmit,
});

export const getHelperTexts = ({slug}: IGetHelperTextsParams): IHelperTexts => slug
  ? ({
    formTitle: "Edit Role",
    formSubtitle: "Get started by updating the information below to update the role.",
    dialogBoxTitle: "Role Updated",
    dialogBoxDescription: "role updated successfully"
  })
  : ({
    formTitle: "Add new role",
    formSubtitle: "Get started by filling in the information below to create a new role.",
    dialogBoxTitle: "New Role Added",
    dialogBoxDescription: "new role added successfully"
  })

export const handleFormSubmitResponse = ({
                                           response,
                                           actions,
                                           open,
                                           setIsOpen,
                                           errorMsg,
                                           setApiError
                                         }: IHandleFormSubmitResponseParams): void => {
  if (!response || !('permissions' in response)) {
    setApiError(({message: errorMsg}))
    setIsOpen(!open)
  }
  setIsOpen(!open)
  actions.resetForm()
}

export const getPermissionIds = ({permissions}: IGetPermissionIdsProps): string[] => {
  return permissions.reduce((ids: string[], item) => {
    ids.push(item.id);
    return ids;
  }, []);
}
