export default interface IGlobalRepository {
  fetchUserScreens: () => Promise<IScreen[] | null>
}

export interface IScreen {
  id: string
  name: string
  slug: string
  permissions: string[]
}

export interface IFetchUserScreensParams {
  accessToken: string | undefined
}
