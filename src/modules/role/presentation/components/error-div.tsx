import React from "react"

interface IErrorDivProps {
  errorMessage: string
}

export default function ErrorDiv({
  errorMessage,
}: IErrorDivProps): React.ReactNode {
  return <div className="text-red-500 inline-block ml-5">{errorMessage}</div>
}
