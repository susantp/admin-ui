import {User} from "next-auth";
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";


export interface InterfaceUserEntityProperties {
  id: string,
  username: string,
  password: string,
  email: string,
  phone: number,
  token: string
}

export default class UserEntity implements User {

  id: string;

  username: string

  password: string

  email: string

  phone: number

  private userEntityProperties: InterfaceUserEntityProperties;

  constructor(userEntityPrams: InterfaceUserEntityProperties) {
    this.id = userEntityPrams.id
    this.email = userEntityPrams.email
    this.username = userEntityPrams.username
    this.password = userEntityPrams.password
    this.phone = userEntityPrams.phone
    this.userEntityProperties = userEntityPrams
  }
}
