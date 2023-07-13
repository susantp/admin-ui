import { authOptions } from "@/auth/domain/config/auth-options"
import {
  IGetAuthClientParams,
  IGetClient,
  IGetPublicClientParams,
  InterfaceApiClient,
} from "@/src/modules/global/domain/types/api-client"
import apiClient from "@/src/modules/global/domain/utils/api-client"
import { Session, getServerSession } from "next-auth"

const getClient: IGetClient = {
  validateSession: async (): Promise<Session | null> => {
    "use server"

    const session: Session | null = await getServerSession(authOptions)
    if (!session) return null
    return session
  },
  authentic: async ({
    requestPath,
    xScreen,
  }: IGetAuthClientParams): Promise<InterfaceApiClient | null> => {
    const session: Session | null = await getClient.validateSession()
    if (!session) return null
    const {
      user: { access },
    } = session
    return apiClient({ requestPath, token: access, xScreen })
  },
  public: ({ requestPath }: IGetPublicClientParams): InterfaceApiClient =>
    apiClient({
      requestPath,
      token: null,
      xScreen: null,
    }),
}

export default getClient
