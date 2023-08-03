"use client"

import React from "react"

import FormSkeleton from "@/profile/presentation/components/form-skeleton"
import UserAccessInformation from "@/profile/presentation/components/user-access-information"
import UserDetailsForm from "@/profile/presentation/components/user-details-form"
import UserInformationForm from "@/profile/presentation/components/user-information-form"
import { useProfile } from "@/profile/presentation/hooks/use-profile"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function UserProfilePage(): React.ReactElement {
  const { profile } = useProfile()

  return (
    <Card className="h-full bg-accent p-4 space-y-6 overflow-auto">
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
    </Card>
  )
}
