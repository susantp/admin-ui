import React from "react"
import { PlusIcon } from "@heroicons/react/20/solid"

interface ICreateButtonParams {
  onClose: () => void
}
function CreateButton({ onClose }: ICreateButtonParams): JSX.Element {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
      onClick={onClose}
    >
      <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
      Add user
    </button>
  )
}
export default CreateButton
