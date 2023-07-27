interface UserEndpoints {
  allUsers: string
  userActiveDeactive: string
  userIsSuperuser: string
}

export const userEndpoints: UserEndpoints = {
  allUsers: "admin/users/",
  userActiveDeactive: "admin/user/:id/active-deactive/",
  userIsSuperuser: "admin/user/:id/is-superuser/",
}
