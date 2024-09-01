import React, { ReactElement, Suspense } from "react"

import FormSkeleton from "@/core/presentation/components/FormSkeleton"
import UserInformationForm from "@/modules/user-profile/components/server/UserInformation"
import { actionGetUser } from "@/modules/user-profile/domain/actions"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function DefaultUserProfile(): Promise<ReactElement> {
  const user = await actionGetUser()
  return (
    <div className="h-full p-4 space-y-6 overflow-auto ">
      <Card className="flex w-full bg-primary border-0 shadow-none">
        <CardHeader className="w-5/12 text-primary-foreground">
          <CardTitle className="text-3xl">User Information</CardTitle>
          <CardDescription className="text-secondary-foreground text-sm">
            Update your account&apos;s profile information and email address
          </CardDescription>
        </CardHeader>
        <Suspense
          fallback={<FormSkeleton classes="p-4 space-y-6 border-0 w-7/12" />}
        >
          <UserInformationForm
            user={user}
            classes="p-4 space-y-6 border-0 w-7/12"
          />
        </Suspense>
      </Card>
    </div>
  )
}
