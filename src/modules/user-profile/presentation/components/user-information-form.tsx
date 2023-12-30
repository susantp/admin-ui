"use client"

import React from "react"
import UserChangePasswordForm from "@/profile/presentation/components/user-change-password-form"
import UserEmailForm from "@/profile/presentation/components/user-email-form"
import UserPhoneForm from "@/profile/presentation/components/user-phone-form"
import { KeyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserInformationFormProps {
  profile?: UserProfile
}

export default function UserInformationForm({
  profile,
}: UserInformationFormProps): React.ReactElement {
  return (
    <Card>
      <CardHeader className="space-y-6">
        <div className="space-y-2">
          <Label>Username</Label>
          <Input disabled value={profile?.username} />
        </div>
        <UserEmailForm profile={profile} />
        <UserPhoneForm profile={profile} />
      </CardHeader>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <KeyIcon className="mr-2 w-4 h-4" />
              Change Password
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0">
            <UserChangePasswordForm />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
