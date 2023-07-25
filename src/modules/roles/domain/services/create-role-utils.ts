import {
  IGroupedScreenWithPermissions,
  IPermission
} from "@/src/modules/roles/domain/types/endpoints/role-endpoints";
import * as Yup from "yup";
import {FormikConfig} from "formik/dist/types";
import {
  IGetFormikHook,
  IGetGroupedData,
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
                                                      }: IGetFormikHook<T>): FormikConfig<T> => ({
  enableReinitialize: true,
  initialValues,
  validationSchema: formSchema,
  onSubmit: handleSubmit,
});
