import React, {ReactNode} from "react"
import {Dialog} from "@headlessui/react"
import {XMarkIcon} from "@heroicons/react/24/outline"
import Link from "next/link";

interface IPocDialogBoxParams {
  title: string
  description: string
  open: boolean
  onClose: () => void
  goBackPath?: string | null
  addNewPath?: string | null
}

function PocDialogBox({
                        title,
                        description,
                        onClose,
                        open,
                        goBackPath = null,
                        addNewPath = null
                      }: IPocDialogBoxParams): ReactNode {

  return (
    <Dialog className="relative z-10" onClose={onClose} open={open}>
      <div
        className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-80">
        <div
          className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel
            className="relative transform overflow-hidden rounded-lg  text-left transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
            <div className="bg-teal-700 py-6 px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <Dialog.Title className="text-lg font-medium text-white">
                  {title}
                </Dialog.Title>
                {/*<div className="ml-3 flex h-7 items-center">*/}
                {/*  <button*/}
                {/*    type="button"*/}
                {/*    className="rounded-md bg-teal-700 text-gray-100 hover:text-white focus:outline-none "*/}
                {/*    onClick={onClose}*/}
                {/*  >*/}
                {/*    <span className="sr-only">Close panel</span>*/}
                {/*    <XMarkIcon className="h-6 w-6" aria-hidden="true"/>*/}
                {/*  </button>*/}
                {/*</div>*/}
              </div>
              <Dialog.Description className="text-sm text-white py-5">
                {description}
              </Dialog.Description>


              <div className="flex gap-x-4">
                {addNewPath &&
                  <Link href={addNewPath}
                        className="px-3 py-2 rounded-md text-white bg-primary"
                        type="button" onClick={onClose}>Add New</Link>}
                {goBackPath &&
                  <Link href={goBackPath}
                        className="px-3 py-2 rounded-md text-white bg-red-600"
                        type="button" onClick={onClose}>Go Back</Link>}

              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default PocDialogBox

PocDialogBox.defaultProps = {
  goBackPath: null,
  addNewPath: null,
};
