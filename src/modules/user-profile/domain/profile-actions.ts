"use server"

import {
  fetchUserProfileService,
  updateUserDetailService,
} from "@/profile/data/profile-services"
import { UserDetailsFormValues } from "@/profile/presentation/components/form-config"

export const fetchUserProfileAction = (): Promise<UserProfile> =>
  fetchUserProfileService()

export const updateUserDetailAction = (
  values: UserDetailsFormValues
): Promise<Partial<UserProfile>> => {
  const details: UserDetailRequest = {
    first_name: values.firstName,
    last_name: values.lastName,
    address1: values.address,
  }

  return updateUserDetailService(details)
}
