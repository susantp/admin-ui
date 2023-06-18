import UserEntity from "../src/modules/auth/domain/entities/user-entity"
import AuthDataSource
  from "../src/modules/auth/data/datasource/auth-data-source";

test("it return user entity", async () => {
  const newUser: Promise<UserEntity> = new Promise(resolve => {
    return new UserEntity("id", "susant", "password", "email@email.com", 324324)
  })

  const authDataSource = new AuthDataSource()
  expect(authDataSource.login("susant", "password")).toStrictEqual(newUser);
})
