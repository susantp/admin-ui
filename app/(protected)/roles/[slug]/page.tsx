import React from "react"
import Section from "@/src/modules/dashboard/presentation/components/section"
import PocContainer from "@/src/modules/global/presentation/components/poc-container"
import CreateRoleContainer from "@/src/modules/roles/presentation/pages/create-role-container"

interface ISlugPageProps {
  params: { slug: string }
}

export default function Page({ params }: ISlugPageProps): JSX.Element {
  const { slug } = params
  return (
    <PocContainer>
      <Section subLabel={null} label={slug} actionEl={null}>
        <CreateRoleContainer />
      </Section>
    </PocContainer>
  )
}
