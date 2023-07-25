"use client"

import React, {ReactNode} from "react"
import useTempData from "@/src/modules/dashboard/data/datasources/dashboard-datasource"
import Section from "@/src/modules/dashboard/presentation/components/section"
import PocContainer from "@/src/modules/global/presentation/components/poc-container"
import PocTable from "@/src/modules/global/presentation/components/poc-table"
import PocTablePagination from "@/src/modules/global/presentation/components/poc-table-pagination"
import PocTableTools from "@/src/modules/global/presentation/components/poc-table-tools"
import PocTableWrapper from "@/src/modules/global/presentation/components/poc-table-wrapper"

export default function UserContainer(): ReactNode {
  const { people } = useTempData()
  return (
    <PocContainer>
      <Section
        label="User Listing"
        subLabel="A list of all the users in the system including their name, title, email and role."
        actionEl={null}
      >
        <PocTableWrapper>
          <PocTableTools />
          <PocTable people={people} />
          <PocTablePagination />
        </PocTableWrapper>
      </Section>
    </PocContainer>
  )
}
