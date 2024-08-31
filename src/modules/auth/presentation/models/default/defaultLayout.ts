import { ILayout } from "@/modules/auth/presentation/models/default/index"

const defaultLayout: ILayout = {
  logo: {
    path: "/images/lis.png",
    altText: "Next.js Logo",
    width: 196,
    height: 32,
  },
  meta: {
    title: "Welcome back",
    subtitle: "Enter your credentials to sign in to your account",
  },
}

export default defaultLayout
