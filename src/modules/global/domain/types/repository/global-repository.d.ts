export default interface IGlobalService {
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

export interface IServiceProps {
  xScreen: IScreen | null
}
