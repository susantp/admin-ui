import {atom, PrimitiveAtom} from "jotai";
import {atomWithStorage} from 'jotai/utils'

export interface InterfaceUserDetail {
  firstName: string,
  lastName: string,
  address1: string,
  email?: string
}

const defaultUserDetail: InterfaceUserDetail = {
  address1: "", firstName: "", lastName: ""
}
export const sessionAtom = atomWithStorage('user', {})

export const userDetailAtom = atom({})
// export const readWriteUserDetailAtom: WritableAtom<InterfaceUserDetail, InterfaceUserDetail, InterfaceUserDetail> = atom(
//   get => get(userDetailAtom),
//   (get, set, userDetail: InterfaceUserDetail) => {
//     set(userDetailAtom, {...userDetail})
//   }
// )

