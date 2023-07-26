// TODO this is just a json data after implementation of api this json data should be removed

import {
  InterfaceNavigation,
  InterfacePage,
  InterfacePeople,
  InterfaceProject,
  InterfaceUserNavigation,
} from "@/src/modules/dashboard/domain/types/dashboard-type"
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"
import {appPaths} from "@/src/modules/global/domain/objects/global";

interface InterfaceGetTempData {
  people: InterfacePeople[]
  projects: InterfaceProject[]
  pages: InterfacePage[]
  userNavigation: InterfaceUserNavigation[]
  navigation: InterfaceNavigation[]
}
const useTempData = (): InterfaceGetTempData => {
  const people: InterfacePeople[] = [
    {
      name: "Ishwor Kafle",
      title: "Principle Software Engineer",
      department: "Development Service",
      email: "ishwor.kafle@lisnepal.com.np",
      role: "Super Admin",
      image: "/avatar.avif",
    },
    {
      name: "Anish Byanjankar",
      title: "Principle Software Engineer",
      department: "Development Service",
      email: "anish.byanjankar@lisnepal.com.np",
      role: "Admin",
      image: "/avatar.avif",
    },
    {
      name: "Rubin Maharjan",
      title: "Senior Software Engineer",
      department: "Development Service",
      email: "rubin.maharjan@lisnepal.com.np",
      role: "Member",
      image: "/avatar.avif",
    },
    {
      name: "Susanta Paudel",
      title: "Senior Software Engineer",
      department: "Development Service",
      email: "susanta.paudel@lisnepal.com.np",
      role: "Member",
      image: "/avatar.avif",
    },
    {
      name: "Ishwor Kafle",
      title: "Principle Software Engineer",
      department: "Development Service",
      email: "ishwor.kafle1@lisnepal.com.np",
      role: "Super Admin",
      image: "/avatar.avif",
    },
    {
      name: "Anish Byanjankar",
      title: "Principle Software Engineer",
      department: "Development Service",
      email: "anish.byanjankar1@lisnepal.com.np",
      role: "Admin",
      image: "/avatar.avif",
    },
    {
      name: "Rubin Maharjan",
      title: "Senior Software Engineer",
      department: "Development Service",
      email: "rubin.maharjan1@lisnepal.com.np",
      role: "Member",
      image: "/avatar.avif",
    },
    {
      name: "Susanta Paudel",
      title: "Senior Software Engineer",
      department: "Development Service",
      email: "susanta.paudel1@lisnepal.com.np",
      role: "Member",
      image: "/avatar.avif",
    },
    // add more people...
  ]
  const projects: InterfaceProject[] = [
    {
      id: "dashboard",
      name: "Dashboard",
      initials: "DB",
      href: "#",
      members: 16,
      bgColor: "bg-pink-600",
      status: "active",
      createdBy: "admin",
    },
    {
      id: "users",
      name: "User Management",
      initials: "UM",
      href: "#",
      members: 12,
      bgColor: "bg-purple-600",
      status: "active",
      createdBy: "admin",
    },
    {
      id: "roles",
      name: "Role Management",
      initials: "RM",
      href: "#",
      members: 16,
      bgColor: "bg-yellow-500",
      status: "active",
      createdBy: "admin",
    },
    {
      id: "pages",
      name: "Page Management",
      initials: "PM",
      href: "#",
      members: 8,
      bgColor: "bg-green-500",
      status: "inactive",
      createdBy: "admin",
    },
  ]
  const pages: InterfacePage[] = [
    { name: "Home", href: "#", current: false },
    { name: "Dashboard", href: "#", current: true },
  ]
  const userNavigation: InterfaceUserNavigation[] = [
    { name: "Your Profile", href: appPaths.profile.path },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ]
  const navigation: InterfaceNavigation[] = [
    { name: "Dashboard", href: "dashboard", icon: HomeIcon, current: true },
    { name: "User Management", href: "users", icon: UsersIcon, current: false },
    { name: "Role Management", href: "#", icon: FolderIcon, current: false },
    { name: "Page Management", href: "#", icon: CalendarIcon, current: false },
    { name: "Data Access", href: "#", icon: InboxIcon, current: false },
    { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
  ]

  return { people, projects, pages, userNavigation, navigation }
}
export default useTempData
