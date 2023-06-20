import ApiClient from "@/src/utils/api-client"
import UserEntity, {
  InterfaceUserEntityProperties
} from "@/src/modules/auth/domain/entities/user-entity";

export default class AuthDataSource {

  // eslint-disable-next-line class-methods-use-this
  // #postRemote(username: string, password: string): Promise<UserEntity> {
  //   return ApiClient.post("user/login/", {
  //     username,
  //     password,
  //   })
  // }

  // eslint-disable-next-line class-methods-use-this
  async #postLocal(username: string): Promise<UserEntity> {
    const params: InterfaceUserEntityProperties = {
      id: "id",
      username,
      password: "password",
      email: "email@email.com",
      phone: 12234324,
      token: "token_123"
    }
    return new Promise((resolve) => {
      const newUser = new UserEntity(params);
      resolve(newUser);
    });
  }

  public login(username: string, password: string|undefined): Promise<UserEntity> {
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
