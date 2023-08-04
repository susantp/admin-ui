import React, {ReactNode} from "react";
import {signOut, useSession} from "next-auth/react";
import {Skeleton} from "@/components/ui/skeleton";
import {ModeToggle} from "@/components/mode-toggle";
import {NotificationToggle} from "@/components/notification-toggle";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import {DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import {LogOut, User, User2Icon} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

interface IUserDropdownProps {
  initials: string | null
  name: string | undefined | null
  email: string | undefined | null
}

function UserDropdown({initials, name, email}: IUserDropdownProps): ReactNode {
  const handleLogout = (): void => {
    signOut().then(() => null).catch(() => null)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0 ring-0">
          {/* <Avatar>
            <AvatarImage src="/favico.ico"/>
            <AvatarFallback className="text-primary">{initials}</AvatarFallback>
          </Avatar> */}
          <User2Icon/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-2" align="end">

        <DropdownMenuItem>
          <div className="flex flex-col italic text-gray-600">
            <h3 className="text-[0.6 rem] ">{name}</h3>
            <p className="text-[0.6 rem]">{email}</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator/>

        <Link href="/profile">
          <DropdownMenuItem className="cursor-pointer flex mt-2">
            <User className="mr-2 h-4 w-4"/>
            <span>My Account</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator/>
        <DropdownMenuItem onClick={(): void => handleLogout()}  className="cursor-pointer flex mt-2">
          <LogOut className="mr-2 h-4 w-4"/>
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


export function UserCardVersionTwo(): ReactNode {
  const session = useSession()

  const user = session.data?.user
  const name = [user?.firstName, user?.lastName].join(" ")
  const email = user?.email
  const initials = [user?.firstName.at(0), user?.lastName.at(0)].join("")

  if (!user) {
    return (
      <>
        <Skeleton className="h-10 w-10 rounded-full"/>
        <Skeleton className="h-10 w-10 rounded-full"/>
        <Skeleton className="h-10 w-10 rounded-full"/>
      </>
    )
  }

  return (
    <>
      <div className="w-10 rounded-full flex items-center">
        <NotificationToggle/>
      </div>
      <div className="w-10 rounded-full flex items-center">
        <ModeToggle/>
      </div>
      <div className="w-10 rounded-full flex items-center">
        <UserDropdown name={name} email={email} initials={initials}/>
      </div>
    </>
  )
}
