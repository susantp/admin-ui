import * as React from "react"

export interface InterfacePeople {
  name: string
  title: string
  department: string
  email: string
  role: string
  image: string
}

export interface InterfacePage {
  name: string
  href: string
  current: boolean
}

type IStatus = "active" | "inactive" | "archived"

export interface InterfaceProject {
  id: string
  name: string
  initials: string
  href: string
  members: number
  bgColor: string
  status: IStatus
  createdBy: string
}

export interface InterfaceUserNavigation {
  name: string
  href: string
  action: (() => Promise<null>) | null
}

export interface InterfaceNavigation {
  name: string
  href: string
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
    title?: string
    titleId?: string
  } & React.RefAttributes<SVGSVGElement>
  >
  current: boolean
}
