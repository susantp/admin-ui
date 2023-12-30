import React, { Fragment, ReactNode } from "react"
import { IRole } from "@/src/modules/role/domain/types/endpoints/role-endpoints"
import { Dialog, Transition } from "@headlessui/react"

interface IPocModalProps {
  isOpen: boolean
  closeModal: () => void
  handleDelete: () => void
  role: IRole | null
}

export default function DeleteConfirmModal({
  closeModal,
  isOpen,
  handleDelete,
  role,
}: IPocModalProps): ReactNode {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Delete Confirmation
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to delete{" "}
                    <span className="font-bold text-red-500">{role?.name}</span>{" "}
                    ?
                  </p>
                </div>

                <div className="mt-4 flex gap-x-2 justify-end">
                  <button
                    type="button"
                    className="primaryButtonStyle"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="dangerButtonStyle"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
