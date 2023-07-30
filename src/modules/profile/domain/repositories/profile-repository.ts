import {
    IUpdateEmailResponse,
    IUpdatePasswordResponse,
    IUpdatePhoneResponse
} from "@/src/modules/profile/domain/types/endpoints/response"
import {
    IPostUserDetailProps,
    IUpdateEmailProps,
    IUpdatePasswordProps,
    IUpdatePhoneProps
} from "@/src/modules/profile/domain/types/server-actions/props"
import {IUserDetailResponse} from "@/src/modules/profile/domain/types/endpoints";

export interface IProfileDataSource {
  updateEmailData: ({
    body
  }: IUpdateEmailProps) => Promise<IUpdateEmailResponse | null>
  updatePhoneData: ({
                      body
                    }: IUpdatePhoneProps) => Promise<IUpdatePhoneResponse | null>
  updatePasswordData: ({
                      body
                    }: IUpdatePasswordProps) => Promise<IUpdatePasswordResponse | null>
  getUserDetailData: () => Promise<IUserDetailResponse|null>
  putUserDetailData: ({body}: IPostUserDetailProps) => Promise<IUserDetailResponse|null>
}
