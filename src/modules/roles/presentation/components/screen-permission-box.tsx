import React from "react"
import { Fingerprint } from "lucide-react"

export default function ScreenPermissionBox(): JSX.Element {
  return (
    <div className="flex flex-col shadow-xl">
      <div id="screen-title" className="flex p-2 bg-secondary">
        <p className="text-primary font-semibold">Screen</p>
      </div>

      {[
        { name: "Create", status: true },
        {
          name: "Edit",
          status: true,
        },
        { name: "Update", status: false },
        {
          name: "Delete",
          status: true,
        },
      ].map((item) => (
        <div
          id="permissionDiv"
          className="flex gap-x-5 p-3 border-gray-200 border-2"
        >
          <Fingerprint />
          <p id="permission-name" className="flex-1">
            {item.name}
          </p>
          <input
            type="checkbox"
            id="p-1"
            defaultChecked={item.status}
            className="flex-none"
          />
        </div>
      ))}
    </div>
  )
}
