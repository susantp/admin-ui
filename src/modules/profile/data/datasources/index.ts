import {getRequest, putRequest} from "@/src/modules/global/domain/utils/api-client"
import {authenticClient} from "@/src/modules/global/domain/utils/get-authentic-client"
import getHelpers from "@/src/modules/global/domain/utils/helpers"
import {profileEndpoints} from "@/src/modules/profile/domain/objects/endpoint"
import {IProfileDataSource} from "@/src/modules/profile/domain/repositories/profile-repository"
import {
    IUpdateEmailResponse,
    IUpdatePasswordResponse,
    IUpdatePhoneResponse
} from "@/src/modules/profile/domain/types/endpoints/response"
import {
    IPostUserDetailProps,
    IUpdateEmailProps,
    IUpdatePasswordProps
} from "@/src/modules/profile/domain/types/server-actions/props"
import {IUserDetailResponse} from "@/src/modules/profile/domain/types/endpoints";

const {putEmail, putPhone, loggedInUserPostPassword, getPostUserDetail} = profileEndpoints

const {composeRequestPath} = getHelpers

const profileDataSource: IProfileDataSource = {
    getUserDetailData: async (): Promise<IUserDetailResponse | null> => {
        const clientConfig: RequestInit | null = await authenticClient({xScreen: null})
        if (!clientConfig) return null
        const requestPath: string = getPostUserDetail
        const url: URL = composeRequestPath({requestPath})

        try {
            return await getRequest<IUserDetailResponse>({
                requestPath: url,
                requestInit: clientConfig
            })
        } catch (error) {
            console.log(error)
            return null
        }
    },
    putUserDetailData: async ({body}: IPostUserDetailProps): Promise<IUserDetailResponse | null> => {
        const clientConfig: RequestInit | null = await authenticClient({xScreen: null})
        if (!clientConfig) return null
        const requestPath: string = getPostUserDetail
        const url: URL = composeRequestPath({requestPath})

        try {
            return await putRequest<IUserDetailResponse>({
                requestPath: url,
                requestInit: clientConfig,
                body
            })
        } catch (error) {
            return null
        }
    },
    updateEmailData: async ({
                                body
                            }: IUpdateEmailProps): Promise<IUpdateEmailResponse | null> => {
        const clientConfig: RequestInit | null = await authenticClient({
            xScreen: null,
        })
        if (!clientConfig) return null
        const requestPath: string = putEmail
        const url: URL = composeRequestPath({requestPath})

        try {
            return await putRequest<IUpdateEmailResponse>({
                requestPath: url,
                requestInit: clientConfig,
                body,
            })
        } catch (error) {
            return null
        }
    },
    updatePhoneData: async ({
                                body
                            }: IUpdateEmailProps): Promise<IUpdatePhoneResponse | null> => {
        const clientConfig: RequestInit | null = await authenticClient({
            xScreen: null,
        })
        if (!clientConfig) return null
        const requestPath: string = putPhone
        const url: URL = composeRequestPath({requestPath})

        try {
            return await putRequest<IUpdatePhoneResponse>({
                requestPath: url,
                requestInit: clientConfig,
                body,
            })
        } catch (error) {
            return null
        }
    },
    updatePasswordData: async ({
                                   body
                               }: IUpdatePasswordProps): Promise<IUpdatePasswordResponse | null> => {
        const clientConfig: RequestInit | null = await authenticClient({
            xScreen: null,
        })
        if (!clientConfig) return null
        const requestPath: string = loggedInUserPostPassword

        const url: URL = composeRequestPath({requestPath})
        try {
            return await putRequest<IUpdatePasswordResponse>({
                requestPath: url,
                requestInit: clientConfig,
                body,
            })
        } catch (error) {
            throw new Error("failed")
        }
    }
}
export default profileDataSource
