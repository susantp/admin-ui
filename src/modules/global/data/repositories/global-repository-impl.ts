import {IUserScreens} from "@/src/modules/global/domain/types/global-type";

export default interface IGlobalRepository{
  fetchUserScreens(accessToken: string): Promise<IUserScreens | null>
}
