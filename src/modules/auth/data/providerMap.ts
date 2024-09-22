import { IAuthProvider } from "@/modules/auth/config"
import providers from "@/modules/auth/config/auth-providers"

export const providerMap: IAuthProvider[] = providers
  .map((provider) => {
    if (typeof provider === "function") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    }
    return { id: provider.id, name: provider.name }
  })
  .filter((provider) => provider.id !== "credentials")
export default providers
