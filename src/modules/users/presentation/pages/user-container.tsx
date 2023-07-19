"use client"

import React, { useState } from "react"
import useTempData from "@/src/modules/dashboard/data/datasources/dashboard-datasource"
import Section from "@/src/modules/dashboard/presentation/components/section"
import PocContainer from "@/src/modules/global/presentation/components/poc-container"
import PocDialogBox from "@/src/modules/global/presentation/components/poc-dialog-box"
import PocTable from "@/src/modules/global/presentation/components/poc-table"
import PocTablePagination from "@/src/modules/global/presentation/components/poc-table-pagination"
import PocTableTools from "@/src/modules/global/presentation/components/poc-table-tools"
import PocTableWrapper from "@/src/modules/global/presentation/components/poc-table-wrapper"
import CreateButton from "@/src/modules/users/presentation/components/create-button"
import CreateEditUserForm from "@/src/modules/users/presentation/components/create-edit-user-form"

export default function UserContainer(): JSX.Element {
  const { people } = useTempData()
  const [open, setOpen] = useState(false)
  const handleOnClose = (): void => {
    setOpen(!open)
  }
  return (
    <>
      <PocContainer>
        <Section
          label="User Listing"
          subLabel="A list of all the users in the system including their name, title, email and role."
          actionEl={<CreateButton onClose={handleOnClose} />}
        >
          <PocTableWrapper>
            <PocTableTools />
            <PocTable people={people} />
            <PocTablePagination />
          </PocTableWrapper>
        </Section>
      </PocContainer>
      <PocDialogBox open={open} onClose={handleOnClose}>
        <CreateEditUserForm onClose={handleOnClose} />
      </PocDialogBox>
    </>
  )
}
