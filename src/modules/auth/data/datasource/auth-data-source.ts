import ApiClient from "@/src/utils/api-client"
import UserEntity from "@/src/modules/auth/domain/entities/user-entity";

export default class AuthDataSource {

  // eslint-disable-next-line class-methods-use-this
  #postRemote(username: string, password: string): Promise<unknown> {
    return ApiClient.post("user/login/", {
      username,
      password,
    })
  }

  // eslint-disable-next-line class-methods-use-this
  async #postLocal(username: string): Promise<UserEntity> {
    const newUser = new UserEntity("id", username, "password", "email@email.com", 324324)
    return new Promise(resolve => {
      return newUser
    })
  }

  public login(username: string, password: string): Promise<unknown> {
    return this.#postLocal(username)
    // return this.#postRemote(username, password)
  }

  // eslint-disable-next-line class-methods-use-this
  public register(
    username: string,
    password: string,
    email?: string,
    phone?: string
  ): Promise<unknown> {
    return ApiClient.post("user/register/", {
      username,
      password,
      email,
      phone,
    })
  }
}
