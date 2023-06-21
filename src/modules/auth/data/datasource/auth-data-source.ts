import ApiClient from "@/src/utils/api-client"
import AuthApiResponse from "@/auth/domain/entities/auth-api-response";

export default class AuthDataSource {

  // eslint-disable-next-line class-methods-use-this
  // #postRemote(username: string, password: string): Promise<UserEntity> {
  //   return ApiClient.post("user/login/", {
  //     username,
  //     password,
  //   })
  // }

  // eslint-disable-next-line class-methods-use-this
  async #postLocal(username: string): Promise<AuthApiResponse | null> {
    const authResponse: AuthApiResponse = {
      access: "adslkfjalskdfjalsdkfj",
      refresh: "adsfjaoisdfjoadfjasiodfj"
    }
    return new Promise((resolve) => {
      resolve(authResponse);
    });
  }

  public login(username: string, password: string | undefined): Promise<AuthApiResponse | null> {
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
