import { IProfileEndpoints } from "@/src/modules/profile/domain/types/endpoints"
import getHelpers from "@/src/modules/global/domain/utils/helpers";

const project: string = getHelpers.getBackendProjectName()
export const profileEndpoints: IProfileEndpoints = {
  putEmail: "change-email/",
  putPhone: "change-phone/",
  postPassword: `${project}/change-password/`
}
