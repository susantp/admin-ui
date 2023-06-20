export interface InterfaceUserEntityProperties {
  id: string,
  username: string,
  password: string,
  email: string,
  phone: number,
  token: string
}

export default class UserEntity {

  userEntityProperties: InterfaceUserEntityProperties

  constructor(userEntityPrams: InterfaceUserEntityProperties) {
    this.userEntityProperties = userEntityPrams
  }
}
