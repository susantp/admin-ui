"use client"

import React, { ReactElement } from "react"

import { KeyRoundIcon, Trash2Icon } from "lucide-react"

import { Screen } from "@/modules/screen-management/domain/types"
import ScreenForm from "@/modules/screen-management/presentation/components/screen-form"
import { useScreenActions } from "@/modules/screen-management/presentation/hooks/use-screen-actions"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface ScreenColumnActionsProps {
  screen: Screen
}

export default function ScreenColumnActions({
  screen,
}: ScreenColumnActionsProps): ReactElement {
  const { deleteScreen } = useScreenActions()

  return (
    <div className="space-x-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">
            <KeyRoundIcon className="mr-2 w-4 h-4" />
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0">
          <ScreenForm screen={screen} />
        </DialogContent>
      </Dialog>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size="sm" variant="destructive">
            <Trash2Icon className="mr-2 w-4 h-4" />
            Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          This action cannot be undone. Are you sure you want to remove the
          following screen?
          <span className="font-medium">{screen.name}</span>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={(): void => deleteScreen(screen.id)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
