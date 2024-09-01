import { IEndPointCollection } from "@/modules/user-profile/domain/types"

const modulePath = "/api/v1/auth"

export const endpoints: IEndPointCollection = {
  getUser: `${modulePath}/user`,
}
