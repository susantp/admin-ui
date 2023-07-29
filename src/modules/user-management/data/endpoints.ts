export const userEndpoints = {
  allUsers: "admin/users/",
  userActiveDeactive: (userId: string): string =>
    `admin/user/${userId}/active-deactive/`,
  userIsSuperuser: (userId: string): string =>
    `admin/user/${userId}/is-superuser/`,
}
