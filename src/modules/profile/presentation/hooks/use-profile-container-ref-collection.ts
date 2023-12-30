import {
  IUseProfileContainerRefCollection
} from "@/src/modules/profile/domain/types/presentation/hook";
import {RefObject, useRef} from "react";

const useProfileContainerRefCollection = (): IUseProfileContainerRefCollection => {
  const emailRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const oldPasswordRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const newPasswordRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const confirmPasswordRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const phoneRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

  return {
    emailRef,
    oldPasswordRef,
    confirmPasswordRef,
    newPasswordRef,
    phoneRef
  }
}
export default useProfileContainerRefCollection
