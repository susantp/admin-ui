import { User } from "@/src/modules/user-management/domain/types/user"

export default interface UserService {
  fetchAllUsers(): Promise<User[]>
}
