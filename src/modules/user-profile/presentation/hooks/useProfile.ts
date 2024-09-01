import { useState } from "react"

import { actionGetUser } from "@/modules/user-profile/domain/actions"
import { IUser } from "@/modules/user-profile/presentation/models/default"

import { toast } from "@/components/ui/use-toast"

export const useProfile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const getUser = () => {
    setIsLoading(true)
    actionGetUser()
      .then((user: IUser) => {
        console.log(user)
      })
      .catch((e: Error) => {
        toast({
          title: "Sign in failed",
          description: e.message,
          variant: "destructive",
        })
      })
      .finally(() => setIsLoading(false))
  }
  return {}
}
export default useProfile
