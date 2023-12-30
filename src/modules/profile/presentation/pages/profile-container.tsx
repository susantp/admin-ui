import React, {ReactNode} from "react"
import Section from "@/src/modules/dashboard/presentation/components/section"
import PocContainer
  from "@/src/modules/global/presentation/components/poc-container"
import {
  screenAccessInformation,
  userDetailsSectionLabels,
  userInformationSectionLabels,
} from "@/src/modules/profile/domain/objects/page/profile"
import ProfileSection
  from "@/src/modules/profile/presentation/components/profile-section"
import ProfileSectionWrapper
  from "@/src/modules/profile/presentation/components/profile-section-wrapper"
import UserInformationBox
  from "@/src/modules/profile/presentation/components/user-information-box"
import UserDetailsBox
  from "@/src/modules/profile/presentation/components/user-details-box";
import UserScreensBox
  from "@/src/modules/profile/presentation/components/user-screen-box";

export default function ProfileContainer(): ReactNode {
  return (
    <PocContainer>
      <Section subLabel={null} label={null} actionEl={null}>
        <ProfileSectionWrapper>
          <ProfileSection
            labels={userInformationSectionLabels}
            id="userInformation"
          >
            <UserInformationBox/>
          </ProfileSection>

          <ProfileSection labels={userDetailsSectionLabels} id="userDetails">
            <UserDetailsBox/>
          </ProfileSection>

          <ProfileSection labels={screenAccessInformation} id="userScreens">
            <UserScreensBox/>
          </ProfileSection>
        </ProfileSectionWrapper>
      </Section>
    </PocContainer>
  )
}
