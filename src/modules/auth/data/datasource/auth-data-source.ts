import ApiClient from "@/src/utils/api-client"

export default class AuthDataSource {
  // eslint-disable-next-line class-methods-use-this
  public login(username: string, password: string): Promise<unknown> {
    return ApiClient.post("user/login/", {
      username,
      password,
    })
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
