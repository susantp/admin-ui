import React from "react";

interface IRoleFormProps {
  children: React.ReactNode
  handleSubmit: () => void
}

export default function RoleForm({children, handleSubmit}: IRoleFormProps): JSX.Element {
  return <form onSubmit={handleSubmit}
    className="flex h-full flex-col bg-white shadow-xl">
    {children}
  </form>
}
