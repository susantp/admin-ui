import React from "react";
import PocContainer
  from "@/src/modules/global/presentation/components/poc-container";

export default function Page({params}: {
  params: { slug: string }
}): JSX.Element {

  return (
    <PocContainer>
      <h1>{params.slug}</h1>
    </PocContainer>
  )
}
