import React from "react";
import Link from "next/link";
import getHelpers from "@/src/utils/helpers";

interface IDynamicPageProps {
  params: { slug: string }
}

export default function Page({params}: IDynamicPageProps): JSX.Element {
  // TODO map frontend routes with request if not found any routes give some message
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col items-center gap-y-5">
        <h1 className="text-4xl text-red-500">Oops!!! Page Not found.</h1>
        <h3>must be under construction or you are lost.</h3>
        <div className="px-5 py-2 bg-blue-600 rounded-2xl">
          <Link href={getHelpers().appPaths().dashboard.path} className="text-white font-bold" >Way To Dashboard</Link>
        </div>
      </div>
    </div>
  )
}
