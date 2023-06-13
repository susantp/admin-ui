import "@/styles/globals.css"
import React, {Fragment} from "react"
import {Metadata} from "next"
import {NextFont} from "next/dist/compiled/@next/font"
import {Inter} from "next/font/google"
import {Menu, Transition} from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  CalendarIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon
} from "@heroicons/react/24/outline";
import {classNames} from "@/src/utils/helpers";
import SidebarDesktop
  from "@/src/modules/screens/presentation/components/sidebar-desktop";
import NavbarMobile
  from "@/src/modules/screens/presentation/components/navbar-mobile";

const inter: NextFont = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Frontend Boilerplate NextJS",
  description: "Frontend boilerplate application using NextJS",
}
const navigation = [
  {name: "Dashboard", href: "#", icon: HomeIcon, current: true},
  {name: "User Management", href: "users", icon: UsersIcon, current: false},
  {name: "Role Management", href: "#", icon: FolderIcon, current: false},
  {name: "Page Management", href: "#", icon: CalendarIcon, current: false},
  {name: "Data Access", href: "#", icon: InboxIcon, current: false},
  {name: "Reports", href: "#", icon: ChartBarIcon, current: false},
]
const pages = [
  {name: "Home", href: "#", current: false},
  {name: "Dashboard", href: "#", current: true},
]

const userNavigation = [
  {name: "Your Profile", href: "#"},
  {name: "Settings", href: "#"},
  {name: "Sign out", href: "#"},
]
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}): JSX.Element {


  return (
    <html lang="en">
    <body className={inter.className}>
    <div>
      {/* Static sidebar for desktop */}
      <SidebarDesktop navigation={navigation}>
        <NavbarMobile navigation={navigation}/>
      </SidebarDesktop>
    </div>
    </body>
    </html>
  )
}
