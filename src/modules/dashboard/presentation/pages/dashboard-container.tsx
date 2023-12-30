"use client"

import React, { ReactNode } from "react"
import useTempData from "@/src/modules/dashboard/data/datasources/dashboard-datasource"
import InfoBox from "@/src/modules/dashboard/presentation/components/info-box"
import MostViewedWrapper from "@/src/modules/dashboard/presentation/components/most-viewed-wrapper"
import Section from "@/src/modules/dashboard/presentation/components/section"
import useDashboardActions from "@/src/modules/dashboard/presentation/hooks/use-dashboard-actions"
import PocContainer from "@/src/modules/global/presentation/components/poc-container"
import PocLoader from "@/src/modules/global/presentation/components/poc-loader"
import PocTable from "@/src/modules/global/presentation/components/poc-table"
import PocTablePagination from "@/src/modules/global/presentation/components/poc-table-pagination"
import PocTableTools from "@/src/modules/global/presentation/components/poc-table-tools"
import PocTableWrapper from "@/src/modules/global/presentation/components/poc-table-wrapper"

export default function DashboardContainer(): ReactNode {
  const { people } = useTempData()
  const { loading, topRoles } = useDashboardActions()
  if (loading || !topRoles || !topRoles.length) return <PocLoader />

  return (
    <PocContainer>
      <Section label="Most viewed roles" subLabel="" actionEl={null}>
        <MostViewedWrapper>
          {topRoles.map((role) => (
            <InfoBox key={role.id} role={role} />
          ))}
        </MostViewedWrapper>
      </Section>

      <Section label="Active Users" subLabel={null} actionEl={null}>
        <PocTableWrapper>
          <PocTableTools />
          <PocTable people={people} />
          <PocTablePagination />
        </PocTableWrapper>
      </Section>
    </PocContainer>
  )
}
