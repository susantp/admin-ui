"use client"

import React from "react"

import FormSkeleton from "@/modules/user-profile/presentation/components/form-skeleton"
import UserAccessInformation from "@/modules/user-profile/presentation/components/user-access-information"
import UserDetailsForm from "@/modules/user-profile/presentation/components/user-details-form"
import UserInformationForm from "@/modules/user-profile/presentation/components/user-information-form"
import { useProfile } from "@/modules/user-profile/presentation/hooks/use-profile"
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UserProfilePage(): React.ReactElement {
  const { profile } = useProfile()

  return (
    <div className="h-full bg-secondary p-4 space-y-6 overflow-auto">
      <section className="grid lg:grid-cols-2 gap-2">
        <CardHeader>
          <CardTitle>User Information</CardTitle>
          <CardDescription>Basic Information about the user</CardDescription>
        </CardHeader>
        {!profile && <FormSkeleton />}
        {profile && <UserInformationForm profile={profile} />}
      </section>
      <section className="grid lg:grid-cols-2 gap-2">
        <CardHeader>
          <CardTitle>User Details</CardTitle>
          <CardDescription>Details information about the user</CardDescription>
        </CardHeader>
        {!profile && <FormSkeleton />}
        {profile && <UserDetailsForm profile={profile} />}
      </section>
      <section className="grid lg:grid-cols-2 gap-2">
        <CardHeader>
          <CardTitle>Screen Access Information</CardTitle>
          <CardDescription>
            Information about the screens accessed by the user
          </CardDescription>
        </CardHeader>
        <UserAccessInformation />
      </section>
    </div>
  )
}
