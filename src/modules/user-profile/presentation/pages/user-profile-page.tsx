import React from "react"
import UserAccessInformation from "@/src/modules/user-profile/presentation/components/user-access-information"
import UserDetailsForm from "@/src/modules/user-profile/presentation/components/user-details-form"
import UserInformationForm from "@/src/modules/user-profile/presentation/components/user-information-form"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function UserProfilePage(): React.ReactElement {
  return (
    <Card className="h-full bg-accent p-4 space-y-6 overflow-auto">
      <section className="grid lg:grid-cols-2 gap-2">
        <CardHeader>
          <CardTitle>User Information</CardTitle>
          <CardDescription>Basic Information about the user</CardDescription>
        </CardHeader>
        <UserInformationForm />
      </section>
      <section className="grid lg:grid-cols-2 gap-2">
        <CardHeader>
          <CardTitle>User Details</CardTitle>
          <CardDescription>Details information about the user</CardDescription>
        </CardHeader>
        <UserDetailsForm />
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
