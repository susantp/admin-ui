"use client"

import React, {ReactNode} from "react";
import useUserProfileContainerAction from "@/src/modules/profile/presentation/hooks/user-profile-container-action";
import PocLoader from "@/src/modules/global/presentation/components/poc-loader";
import getHelpers from "@/src/modules/global/domain/utils/helpers";
import {Input} from "@/components/ui/input";
import {IUserDetailResponse} from "@/src/modules/profile/domain/types/endpoints";
import {FieldError} from "react-hook-form";


export default function UserDetailsBox(): ReactNode {
    const {
        userDetail,
        userDetailRegister,
        handleUserDetailSubmit,
        onUserDetailUpdate,
        userDetailFormError
    } = useUserProfileContainerAction()


    if (!userDetail) return <PocLoader/>
    const {toTitleCase} = getHelpers
    return (
        <form onSubmit={handleUserDetailSubmit(onUserDetailUpdate)}>
            <div className="flex flex-col gap-6" id="fields">
                {
                    Object.keys(userDetail).map((key) => {
                        const titleCase = toTitleCase(key)
                        const error: FieldError | undefined = userDetailFormError?.[key as keyof IUserDetailResponse]
                        const defaultValue: string = userDetail[key as keyof IUserDetailResponse]
                        return (
                            <div className="flex flex-col gap-[4px]"
                                 key={Math.random()}
                                 id={`${key}-field`}>
                                <label htmlFor={key}> {titleCase}
                                    <Input defaultValue={defaultValue}  {...userDetailRegister(key, {
                                        required: true,
                                        maxLength: 30
                                    })} />
                                </label>
                                {error?.type === "required" && (
                                    <p role="alert" className="text-red-500 font-semibold">The {titleCase} must be
                                        required.</p>
                                )}
                                {error?.type === "maxLength" && (
                                    <p role="alert" className="text-red-500 font-semibold">The {titleCase} must be no
                                        more than 30 characters long.</p>
                                )}
                            </div>
                        )
                    })
                }
                <div className="flex gap-[4px] justify-end"
                     id="actionDiv">
                    <button type="submit"
                            className="bg-primary text-white rounded-lg px-7 py-3 ">
                        <p className="text-md">Save</p>
                    </button>
                </div>

            </div>
        </form>
    )
}
