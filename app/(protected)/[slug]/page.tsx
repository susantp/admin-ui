import React from "react";

interface IDynamicPageProps {
  params: { slug: string }
}

export default function Page({params}: IDynamicPageProps): JSX.Element {
  // TODO map frontend routes with request if not found any routes give some message
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col items-center gap-y-5">
        <h1 className="text-4xl">Oops!!! Page Not found.</h1>
        <h3>goto correct navigation</h3>
      </div>
    </div>
  )
}
