import React from "react"
import { Dialog } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface IPocDialogBoxParams {
  title: string
  description: string
  open: boolean
  onClose: () => void
}

function PocDialogBox({
  title,
  description,
  onClose,
  open,
}: IPocDialogBoxParams): JSX.Element {
  return (
    <Dialog className="relative z-10" onClose={onClose} open={open}>
      <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-80">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg  text-left transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
            <div className="bg-teal-700 py-6 px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <Dialog.Title className="text-lg font-medium text-white">
                  {title}
                </Dialog.Title>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    className="rounded-md bg-teal-700 text-gray-100 hover:text-white focus:outline-none "
                    onClick={onClose}
                  >
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <Dialog.Description>
                <div className="mt-1">
                  <p className="text-sm text-white">{description}</p>
                </div>
              </Dialog.Description>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default PocDialogBox
