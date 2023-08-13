export const screenEndpoints = {
  getScreens: "admin/screens/",
  postScreen: "admin/screens/",
  getScreen: (screenId: string): string => `admin/screen/${screenId}/`,
  putScreen: (screenId: string): string => `admin/screen/${screenId}/`,
  deleteScreen: (screenId: string): string => `admin/screen/${screenId}/`,
}
