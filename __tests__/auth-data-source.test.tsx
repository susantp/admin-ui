import UserEntity, {
  InterfaceUserEntityProperties
} from "../src/modules/user/domain/entities/user-entity"
import AuthDataSource
  from "../src/modules/auth/data/datasource/auth-data-source";

test("it return user entity", async () => {
  const newUser: Promise<UserEntity> = new Promise(resolve => {
    const params: InterfaceUserEntityProperties = {
      id: "id",
      username:"username",
      password: "password",
      email: "email@email.com",
      phone: 12234324,
      token: "token_123"
    }
    return new UserEntity(params)
  })

  const authDataSource = new AuthDataSource()

  expect(authDataSource.login("susant", "password")).toStrictEqual(newUser);
})
