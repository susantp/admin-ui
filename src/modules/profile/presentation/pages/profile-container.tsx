import React, {ReactNode} from "react";
import PocContainer
  from "@/src/modules/global/presentation/components/poc-container";
import Section from "@/src/modules/dashboard/presentation/components/section";

interface IProfilePageBoxProps {
  children: ReactNode
}

function ProfilePageBox({children}: IProfilePageBoxProps): ReactNode {
  return (
    <div className="flex flex-col lg:flex-row justify-between ">
      <div className="flex flex-col">
        <div>title</div>
        <div>subtitle</div>
      </div>
      {children}
    </div>
  )
}

export default function ProfileContainer(): ReactNode {
  return (
    <PocContainer>
      <Section subLabel="get started with updating your details"
               label="Your Information" actionEl={null}>
        <div className="flex flex-col gap-4">
          <ProfilePageBox>
            <div>box</div>
          </ProfilePageBox>
          <ProfilePageBox>
            <div>box</div>
          </ProfilePageBox>
        </div>
      </Section>
    </PocContainer>
  )
}
