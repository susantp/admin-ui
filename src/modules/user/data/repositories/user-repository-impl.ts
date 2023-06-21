import UserEntity from "@/src/modules/user/domain/entities/user-entity";
import userDataSource
  from "@/src/modules/user/data/datasources/user-datasource";
import {InterfaceUserRepositoryImpl} from "@/src/modules/user/interface";

const userRepositoryImpl = (): InterfaceUserRepositoryImpl => {
  const getUser = async (): Promise<UserEntity> => userDataSource().getUser()

  return {getUser}
}
export default userRepositoryImpl()
