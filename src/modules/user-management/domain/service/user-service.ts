import { users } from "@/src/modules/user-management/data/data"
import { User } from "@/src/modules/user-management/domain/types/user"
import UserService from "@/src/modules/user-management/domain/types/user-service"

export const userService: UserService = {
  fetchAllUsers(): Promise<User[]> {
    return Promise.all(users)
  },
}
