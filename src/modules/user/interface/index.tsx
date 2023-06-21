import UserEntity from "@/src/modules/user/domain/entities/user-entity";

export interface InterfaceUserDataSource {
  getUser: () => Promise<UserEntity>
}
