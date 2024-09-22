import React, { ReactElement } from "react"

import FieldSection from "@/core/presentation/components/FieldSection"
import { IUserInformationProps } from "@/modules/user-profile/components"

import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DefaultUserInformation({
  user,
  classes,
}: IUserInformationProps): ReactElement {
  return (
    <Card className={classes}>
      <CardHeader className="space-y-6">
        <FieldSection>
          <Label className="text-sm">Name</Label>
          <Input name="name" defaultValue={user.name} />
        </FieldSection>
        <FieldSection>
          <Label className="text-sm">Email</Label>
          <Input name="email" defaultValue={user.email} />
        </FieldSection>
      </CardHeader>
      <CardFooter className="flex items-center justify-end">
        <Button className="text-sm" size="lg">
          Save
        </Button>
      </CardFooter>
    </Card>
  )
}
