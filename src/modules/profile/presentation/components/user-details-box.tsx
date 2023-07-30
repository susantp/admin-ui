import React, {ReactNode} from "react";
import InputWithLabelIconAction
  from "@/components/ui/input-with-label-icon-action";
import userProfileContainerAction
  from "@/src/modules/profile/presentation/hooks/user-profile-container-action";

export default function UserDetailsBox(): ReactNode {
  const {userDetail} = userProfileContainerAction()

  if (!userDetail) return null
  const toSnakeCase = (camelCaseStr: string): string => camelCaseStr.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2').toLowerCase()
  const toTitleCase = (camelCaseStr: string): string => camelCaseStr
    .replace(/([A-Z])/g, ' $1') // insert a space before all capital letters
    .replace(/^./, (str) => {
      return str.toUpperCase();
    }) // capitalize the first character
    .trim()

  return (
    <div className="flex flex-col gap-6" id="fields">

      {

        Object.keys(userDetail).map((key) => {
          const snakeCase = toSnakeCase(key)
          const titleCase = toTitleCase(key)
          return (
            <div className="flex flex-col gap-[4px]"
                 key={Math.random()}
                 id="firstName-field">
              <InputWithLabelIconAction defaultValue={undefined}
                                        disabled={false}
                                        placeholderIcon={null}
                                        label={titleCase} placeholder=""
                                        type="text" id={snakeCase}
                                        inputRef={null} action={undefined}/>
            </div>
          )
        })
      }
      <div className="flex gap-[4px] justify-end"
           id="actionDiv">
        <button type="button"
                className="bg-primary text-white rounded-lg px-7 py-3 ">
          <p className="text-md">Save</p>
        </button>
      </div>

    </div>
  )
}
