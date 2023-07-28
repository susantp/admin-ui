"use client"

import React, {ReactNode} from "react"
import Section from "@/src/modules/dashboard/presentation/components/section"
import PocContainer
  from "@/src/modules/global/presentation/components/poc-container"
import {
  screenAccessInformation,
  userDetailsSectionLabels,
  userInformationFormFields,
  userInformationSectionLabels,
} from "@/src/modules/profile/domain/objects/page/profile"
import ProfileSection
  from "@/src/modules/profile/presentation/components/profile-section"
import ProfileSectionWrapper
  from "@/src/modules/profile/presentation/components/profile-section-wrapper"
import UserInformationBox
  from "@/src/modules/profile/presentation/components/user-information-box"
import useUserProfileContainerAction
  from "@/src/modules/profile/presentation/hooks/user-profile-container-action"
import PocLoader from "@/src/modules/global/presentation/components/poc-loader";
import UserDetailsBox
  from "@/src/modules/profile/presentation/components/user-details-box";
import NavAnchor
  from "@/src/modules/global/presentation/components/sidebar-components/nav-anchor";
import useSidebarDesktopActions
  from "@/src/modules/global/presentation/hooks/use-sidebar-desktop-actions";

function UserScreensBox(): ReactNode {
  const { getIcon, userScreens } = useSidebarDesktopActions()
  const activeColor: string = "bg-teal-800 text-white"
  const inactiveColor: string = "text-black-100 hover:bg-slate-300 "
  const iconColorCss: string = "text-black-300"
  return (
    <div className="flex flex-col gap-6" id="fields">
      <div className="flex flex-col gap-[4px]"
           id="intro">
        <p>You have access to following screens</p>
      </div>

      <div className="flex flex-col gap-[4px]"
           id="intro">

        <div className="mt-5 flex flex-1 flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {userScreens && userScreens.map((screen) => (
              <NavAnchor key={screen.id} screen={screen} handleGetIcon={getIcon} inactiveColorCss={inactiveColor} iconColorCss={iconColorCss} activeColorCss={activeColor} />
            ))}
          </nav>
        </div>


      </div>

    </div>
  )
}

export default function ProfileContainer(): ReactNode {
  const {
    data,
    passwordEditMode,
    emailRef,
    phoneRef,
    oldPasswordRef,
    newPasswordRef,
    confirmPasswordRef,
    handleEmailUpdate,
    loading,
    handlePhoneUpdate,
    handlePasswordUpdateMode,
    handlePasswordUpdate
  } = useUserProfileContainerAction()

  if (!data || loading) return <PocLoader/>
  const {user} = data
  return (
    <PocContainer>
      <Section subLabel={null} label={null} actionEl={null}>
        <ProfileSectionWrapper>
          <ProfileSection
            labels={userInformationSectionLabels}
            id="userInformation"
          >
            <UserInformationBox
              passwordEditMode={passwordEditMode}
              user={user}
              phoneRef={phoneRef}
              emailRef={emailRef}
              confirmPasswordRef={confirmPasswordRef}
              newPasswordRef={newPasswordRef}
              oldPasswordRef={oldPasswordRef}
              onEmailUpdate={handleEmailUpdate}
              onPhoneUpdate={handlePhoneUpdate}
              onPasswordEditMode={handlePasswordUpdateMode}
              onPasswordUpdate={handlePasswordUpdate}
              formFields={userInformationFormFields}
            />
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
