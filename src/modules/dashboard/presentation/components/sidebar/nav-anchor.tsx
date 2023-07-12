import React from "react"
import { IScreen } from "@/src/modules/global/domain/types/global-type"

interface INavigationAnchorProps {
  screen: IScreen
}
export default function NavAnchor({
  screen,
}: INavigationAnchorProps): JSX.Element {
  return (
    <a
      key={screen.name}
      href={screen.name.toLowerCase()}
      className={
        "group flex items-center px-2 py-2 text-base font-medium rounded-md text-teal-100 hover:bg-teal-600"
        // getHelpers().joinClasses(
        //   screen.current
        //     ? "bg-teal-800 text-white"
        //     : "text-teal-100 hover:bg-teal-600",
        //   "group flex items-center px-2 py-2 text-base font-medium rounded-md"
        // )
      }
    >
      {/* <screen.icon
        className="mr-4 h-6 w-6 flex-shrink-0 text-teal-300"
        aria-hidden="true"
      /> */}
      {screen.name}
    </a>
  )
}
