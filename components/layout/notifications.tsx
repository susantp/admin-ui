import React, { ReactElement } from "react"

import { BellIcon, CheckCheckIcon } from "lucide-react"

import { formatDate } from "@/core/utils/helpers"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Notifications(): ReactElement {
  const notifications = [
    {
      title: "Upcoming Task Deadline",
      content:
        "The task 'Design UI Mockups' is due in 2 days. Please make sure to complete it on time.",
      timestamp: "2023-08-08T10:00:00",
      isRead: true,
    },
    {
      title: "New Comment Added",
      content:
        "A new comment has been added to the task 'Develop Backend API.' Check it out and respond as needed.",
      timestamp: "2023-08-06T15:45:00",
      isRead: false,
    },
    {
      title: "Milestone Achieved",
      content:
        "Congratulations! The project 'Website Redesign' has reached its alpha development milestone. Great job, team!",
      timestamp: "2023-08-10T14:30:00",
      isRead: true,
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-0 w-10 h-10 ring-0">
          <BellIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96" align="end">
        <DropdownMenuLabel className="flex place-content-between place-items-center py-0">
          <p>Notifications</p>
          <Button variant="link" size="sm" className="p-0 text-xs">
            <CheckCheckIcon className="w-3 h-3 mr-2" />
            Mark all as read
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="space-y-1">
          {notifications.map((notification) => (
            <DropdownMenuItem
              className={`space-x-4 p-2 ${
                !notification.isRead && "bg-secondary"
              }`}
              key={notification.timestamp}
            >
              <div className="flex flex-col">
                <p className="text-xs">{formatDate(notification.timestamp)}</p>
                {/* <p className="">{notification.title}</p> */}
                <p className="text-muted-foreground ">{notification.content}</p>
              </div>
              <div>
                <CheckCheckIcon
                  className={`w-4 h-4 ${notification.isRead && "text-primary"}`}
                />
              </div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
