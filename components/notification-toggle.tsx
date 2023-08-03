import * as React from "react";
import {ReactNode} from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Bell} from "lucide-react";

export function NotificationToggle(): ReactNode {
  const notifications: {label: string}[] = [{label: "notification 1"}, {label: "notification 2"}]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0 ring-0">
          <Bell/>
        </Button>
      </DropdownMenuTrigger>
      {notifications.length
      ? (
          <DropdownMenuContent align="end">
            {
              notifications.map(notification => (
                <DropdownMenuItem onClick={(): null => null}>
                  <span>{notification.label}</span>
                </DropdownMenuItem>
              ))
            }
          </DropdownMenuContent>
        )
      : (
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={(): null => null}>
              <span className="italic text-gray-600">You have checked all notifications</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
    </DropdownMenu>
  )
}
