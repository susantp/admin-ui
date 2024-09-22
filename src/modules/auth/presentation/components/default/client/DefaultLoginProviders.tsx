import React, { ReactElement } from "react"

import { providerMap } from "@/modules/auth/data/providerMap"
import { actionSignInProvider } from "@/modules/auth/domain/actions"

import { Button } from "@/components/ui/button"

export default function DefaultLoginProviders(): ReactElement {
  return (
    <form
      action={actionSignInProvider}
      className="flex flex-col items-center justify-center w-full gap-y-2"
    >
      {providerMap.map((provider) => (
        <Button
          key={provider.id}
          type="submit"
          name="provider"
          value={provider.id}
        >
          <p className="px-3">Login with {provider.name}</p>
        </Button>
      ))}
    </form>
  )
}
