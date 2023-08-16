import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import Restricted from "@/src/modules/rbac/presentation/components/restricted"
import { KeyRoundIcon, TrashIcon } from "lucide-react"

import { deleteRoleAction } from "@/modules/role-management/domain/role-actions"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface RoleActionsProps {
  roleId: string
}

function RoleActions({ roleId }: RoleActionsProps): React.ReactElement {
  const router = useRouter()

  return (
    <div className="space-x-2 text-right">
      <Restricted to="UPDATE">
        <Link href={`/roles/${roleId}/edit/`}>
          <Button size="sm">
            <KeyRoundIcon className="mr-2 w-4 h-4" />
            Manage Access
          </Button>
        </Link>
      </Restricted>
      <Restricted to="DELETE">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="sm" variant="destructive">
              <TrashIcon className="mr-2 w-4 h-4" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete this role?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={(): void => {
                  deleteRoleAction(roleId)
                    .then(() => {
                      toast({
                        title: "Success",
                        description: "Role deleted successfully",
                      })
                      router.refresh()
                    })
                    .catch(() => {
                      toast({
                        title: "Failed",
                        description: "Something went wrong.",
                        variant: "destructive",
                      })
                    })
                }}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Restricted>
    </div>
  )
}

export default RoleActions
