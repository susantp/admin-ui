import {FormikConfig, FormikValues} from "formik";
import {
  roleFormFieldValue
} from "@/src/modules/roles/domain/objects/role-form-field-values";
import {IRoleFormValues} from "@/src/modules/roles/domain/types/crud";

export const roleFormikConfig: FormikConfig<IRoleFormValues> = {
  initialValues: roleFormFieldValue,
  onSubmit: (values: FormikValues) => {

    alert(JSON.stringify(values, null, 2));
  },
}
