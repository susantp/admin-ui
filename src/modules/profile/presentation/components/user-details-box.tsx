import React, {ReactNode} from "react";
import InputWithLabelIconAction
  from "@/components/ui/input-with-label-icon-action";

export default function UserDetailsBox(): ReactNode {
  return (
    <div className="flex flex-col gap-6" id="fields">
      <div className="flex flex-col gap-[4px]"
           id="firstName-field">
        <InputWithLabelIconAction defaultValue={undefined}
                                  disabled={false}
                                  placeholderIcon={null}
                                  label="First Name" placeholder=""
                                  type="text" id="firstName"
                                  inputRef={null} action={undefined}/>
      </div>
      <div className="flex flex-col gap-[4px]"
           id="lastName-field">
        <InputWithLabelIconAction defaultValue={undefined}
                                  disabled={false}
                                  placeholderIcon={null}
                                  label="Last Name" placeholder=""
                                  type="text" id="lastName"
                                  inputRef={null} action={undefined}/>
      </div>
      <div className="flex flex-col gap-[4px]"
           id="address-field">
        <InputWithLabelIconAction defaultValue={undefined}
                                  disabled={false}
                                  placeholderIcon={null}
                                  label="Address" placeholder=""
                                  type="text" id="address"
                                  inputRef={null} action={undefined}/>
      </div>
      <div className="flex flex-col gap-[4px]"
           id="address-field">
        <InputWithLabelIconAction defaultValue={undefined}
                                  disabled={false}
                                  placeholderIcon={null}
                                  label="Designation" placeholder=""
                                  type="text" id="designation"
                                  inputRef={null} action={undefined}/>
      </div>
      <div className="flex gap-[4px] justify-end"
           id="actionDiv">
        <button type="button" className="bg-primary text-white rounded-lg px-7 py-3 ">
          <p className="text-md">Save</p>
        </button>
      </div>
    </div>
  )
}
