import { User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import {
  ApiResponse,
  ICredentialsLoginPayload,
  IData,
  IMetaData,
} from "@/core/data"
import { getApiClient } from "@/core/data/api-client"
import { createUrl } from "@/core/utils/helpers"
import { endpoints } from "@/modules/auth/config/endpoints"

const credentialProvider = CredentialsProvider({
  name: "credentials",
  credentials: {
    email: {},
    password: {},
  },

  async authorize(credentials): Promise<User> {
    const data = JSON.stringify(credentials)

    const response = await getApiClient(createUrl(endpoints.userLogin)).post<
      ApiResponse<IData<ICredentialsLoginPayload>, IMetaData>
    >(data)

    if (response.metaData.error.length > 0) {
      throw new Error(response.metaData.error)
    }

    return response.data.payload
  },
})

const providers = [credentialProvider]
export default providers
