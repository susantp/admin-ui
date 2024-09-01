import React, { ReactElement } from "react"

import { IUser } from "@/modules/user-profile/presentation/models/default"

import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface IUserInformationProps {
  user: IUser
  classes: string
}

interface IFieldSectionProps {
  children: React.ReactNode[]
}

function FieldSection({ children }: IFieldSectionProps): ReactElement {
  return <div className="flex flex-col gap-y-2 w-1/2">{children}</div>
}

export default function UserInformation({
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
