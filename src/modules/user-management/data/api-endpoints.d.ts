import { User } from "@/src/modules/user-management/domain/types/user"

interface AllUsersResponse {
  total: number
  total_page: number
  results: User[]
}
