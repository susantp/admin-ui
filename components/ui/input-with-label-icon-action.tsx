import React, {cloneElement, ReactElement, ReactNode} from "react"
import {IInputWithLabelIconAction} from "@/src/modules/global/domain/types/ui"
import {FileEdit} from "lucide-react";

export default function InputWithLabelIconAction({
                                                     defaultValue,
                                                     placeholderIcon,
                                                     label,
                                                     placeholder,
                                                     type,
                                                     id,
                                                     inputRef,
                                                     disabled,
                                                     action,
                                                     onKeyUpAction
                                                 }: IInputWithLabelIconAction): ReactNode {
    const clonedPlaceholderIcon: ReactElement | null = placeholderIcon
        ? cloneElement(placeholderIcon, {
            color: "grey",
            size: 20,
        })
        : placeholderIcon
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <div className="p-1 focus:outline-none focus:shadow-outline">
            {clonedPlaceholderIcon ?? placeholderIcon}
          </div>
        </span>
                <input
                    defaultValue={defaultValue}
                    disabled={disabled}
                    placeholder={placeholder}
                    type={type}
                    ref={inputRef}
                    name={id}
                    onKeyUp={onKeyUpAction}
                    className={`${
                        placeholderIcon && `pl-10`
                    } px-3 py-2 h-10 w-full rounded-md border border-input bg-transparent text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${disabled && `bg-slate-100`}`}
                />
                {action && (
                    <button
                        type="button"
                        onClick={(): void => action()}
                        className="absolute inset-y-0 right-0 flex items-center px-3 rounded-md border border-l-2"
                    >
                        <div className="p-1 focus:outline-none focus:shadow-outline">
                            <FileEdit size={20} color="grey"/>
                        </div>
                        Update
                    </button>
                )}
            </div>
        </>
    )
}
