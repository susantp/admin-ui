// TODO this is just a json data after implementation of api this json data should be removed

import {
  InterfaceNavigation,
  InterfacePage,
  InterfacePeople,
  InterfaceProject,
  InterfaceUserNavigation,
} from "@/src/modules/dashboard/domain/types/dashboard-data"
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"

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
      image: "http://login.lisnepal.com.np/uploads/409/Ishwor.jpg",
    },
    {
      name: "Anish Byanjankar",
      title: "Principle Software Engineer",
      department: "Development Service",
      email: "anish.byanjankar@lisnepal.com.np",
      role: "Admin",
      image: "http://login.lisnepal.com.np/uploads/259/Anish.png",
    },
    {
      name: "Rubin Maharjan",
      title: "Senior Software Engineer",
      department: "Development Service",
      email: "rubin.maharjan@lisnepal.com.np",
      role: "Member",
      image: "http://login.lisnepal.com.np/uploads/636/Ruben.jpg",
    },
    {
      name: "Susanta Paudel",
      title: "Senior Software Engineer",
      department: "Development Service",
      email: "susanta.paudel@lisnepal.com.np",
      role: "Member",
      image: "http://login.lisnepal.com.np/uploads/777/sp.jpg",
    },
    {
      name: "Ishwor Kafle",
      title: "Principle Software Engineer",
      department: "Development Service",
      email: "ishwor.kafle1@lisnepal.com.np",
      role: "Super Admin",
      image: "http://login.lisnepal.com.np/uploads/409/Ishwor.jpg",
    },
    {
      name: "Anish Byanjankar",
      title: "Principle Software Engineer",
      department: "Development Service",
      email: "anish.byanjankar1@lisnepal.com.np",
      role: "Admin",
      image: "http://login.lisnepal.com.np/uploads/259/Anish.png",
    },
    {
      name: "Rubin Maharjan",
      title: "Senior Software Engineer",
      department: "Development Service",
      email: "rubin.maharjan1@lisnepal.com.np",
      role: "Member",
      image: "http://login.lisnepal.com.np/uploads/636/Ruben.jpg",
    },
    {
      name: "Susanta Paudel",
      title: "Senior Software Engineer",
      department: "Development Service",
      email: "susanta.paudel1@lisnepal.com.np",
      role: "Member",
      image: "http://login.lisnepal.com.np/uploads/777/sp.jpg",
    },
    // add more people...
  ]
  const projects: InterfaceProject[] = [
    {
      name: "Dashboard",
      initials: "DB",
      href: "#",
      members: 16,
      bgColor: "bg-pink-600",
    },
    {
      name: "User Management",
      initials: "UM",
      href: "#",
      members: 12,
      bgColor: "bg-purple-600",
    },
    {
      name: "Role Management",
      initials: "RM",
      href: "#",
      members: 16,
      bgColor: "bg-yellow-500",
    },
    {
      name: "Page Management",
      initials: "PM",
      href: "#",
      members: 8,
      bgColor: "bg-green-500",
    },
  ]
  const pages: InterfacePage[] = [
    { name: "Home", href: "#", current: false },
    { name: "Dashboard", href: "#", current: true },
  ]
  const userNavigation: InterfaceUserNavigation[] = [
    { name: "Your Profile", href: "#" },
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
