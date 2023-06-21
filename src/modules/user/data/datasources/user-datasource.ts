import UserEntity, {
  InterfaceUserEntityProperties
} from "@/src/modules/user/domain/entities/user-entity";
import {InterfaceUserDataSource} from "@/src/modules/user/interface";

const userDataSource = (): InterfaceUserDataSource => {
  const getUser = async (): Promise<UserEntity> => {
    const userProperties: InterfaceUserEntityProperties = {
      id: "string",
      username: "string",
      password: "string",
      email: "string",
      phone: 12345678,
      image: "image"
    }
    return Promise.resolve(new UserEntity(userProperties))
  }
  return {getUser}
}

export default userDataSource
