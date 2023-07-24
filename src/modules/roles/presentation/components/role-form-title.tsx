import React from "react";

export default function RoleFormTitle(): JSX.Element {
  return <div id="form-title" className="bg-teal-700 py-6 px-4 sm:px-6">
    <div className="flex items-center justify-between">
      <h1 className="text-lg font-medium text-white">Add new role</h1>
    </div>
    <div className="mt-1">
      <p className="text-sm text-white">
        Get started by filling in the information below to create a
        new role.
      </p>
    </div>
  </div>
}
