"use client"

import React from "react"
import {
  LoginForm,
  LoginHeader,
  LoginWrapper,
  LoginBox,
  SocialLogin
} from "@/auth/presentation/components";


export default function LoginPage(): JSX.Element {
  return (
    <div
      className="flex h-screen bg-gray-100 min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">

      <LoginHeader registerLink={`/register`}/>

      <LoginWrapper>
        <LoginBox>
          <LoginForm/>
          <SocialLogin/>
        </LoginBox>
      </LoginWrapper>
    </div>
  )
}
