export default class UserEntity {

  id = ""

  username = ""

  password = ""

  email = ""

  phone = 0

  constructor(id: string, username: string, password: string, email: string, phone: number) {
    this.email = email
    this.password = password
    this.phone = phone
    this.id = id
    this.username = username
  }

  public get() {
    return {
      email: this.email,
      id: this.id,
      phone: this.phone,
      username: this.username
    }
  }
}
