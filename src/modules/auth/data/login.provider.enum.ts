enum LoginProviderEnum {
  GITHUB = "github",
  TWITTER = "twitter",
  GOOGLE = "google",
  FACEBOOK = "facebook",
  APPLE = "apple",
}

export default LoginProviderEnum

export type LoginProvidersKey = keyof typeof LoginProviderEnum
