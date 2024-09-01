import React, { ReactElement } from "react"

import FormSkeleton from "@/core/presentation/components/FormSkeleton"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function DefaultUserProfile(): ReactElement {
  // const profile = {}
  return (
    <div className="h-full p-4 space-y-6 overflow-auto ">
      <Card className="flex w-full">
        <CardHeader className=" w-5/12">
          <CardTitle>User Information</CardTitle>
          <CardDescription>Basic Information about the user</CardDescription>
        </CardHeader>
        <FormSkeleton classes="p-4 space-y-6 border-0 w-7/12" />
        {/* {!profile && <FormSkeleton />} */}
        {/* {profile && <UserInformationForm profile={profile} />} */}
      </Card>
      {/* <section className="grid lg:grid-cols-2 gap-2"> */}
      {/*   <CardHeader> */}
      {/*     <CardTitle>User Details</CardTitle> */}
      {/*     <CardDescription>Details information about the user</CardDescription> */}
      {/*   </CardHeader> */}
      {/*   /!* {!profile && <FormSkeleton />} *!/ */}
      {/*   /!* {profile && <UserDetailsForm profile={profile} />} *!/ */}
      {/* </section> */}
      {/* <section className="grid lg:grid-cols-2 gap-2"> */}
      {/*   <CardHeader> */}
      {/*     <CardTitle>Screen Access Information</CardTitle> */}
      {/*     <CardDescription> */}
      {/*       Information about the screens accessed by the user */}
      {/*     </CardDescription> */}
      {/*   </CardHeader> */}
      {/*   /!* <UserAccessInformation /> *!/ */}
      {/* </section> */}
    </div>
  )
}
