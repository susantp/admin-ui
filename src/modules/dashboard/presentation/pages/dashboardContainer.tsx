"use client"

import React from "react"
import useTempData
  from "@/src/modules/dashboard/data/datasources/dashboard-datasource"
import InfoBox
  from "@/src/modules/dashboard/presentation/components/dashboard-components/info-box"
import MostViewedWrapper
  from "@/src/modules/dashboard/presentation/components/dashboard-components/most-viewed-wrapper"
import Section
  from "@/src/modules/dashboard/presentation/components/dashboard-components/section"
import PocTable from "@/src/modules/global/presentation/components/poc-table"
import PocTablePagination
  from "@/src/modules/global/presentation/components/poc-table-pagination"
import PocTableTools
  from "@/src/modules/global/presentation/components/poc-table-tools"
import PocTableWrapper
  from "@/src/modules/global/presentation/components/poc-table-wrapper"
import PocContainer
  from "@/src/modules/dashboard/presentation/components/poc-container";

export default function DashboardContainer(): JSX.Element {
  const {projects, people} = useTempData()

  return (
    <PocContainer>
      <Section label="Most viewed pages">
        <MostViewedWrapper>
          {projects.map((project) => (
            <InfoBox key={Math.random()} project={project}/>
          ))}
        </MostViewedWrapper>
      </Section>

      <Section label="Active Users">
        <PocTableWrapper>
          <PocTableTools/>
          <PocTable people={people}/>
          <PocTablePagination/>
        </PocTableWrapper>
      </Section>
    </PocContainer>
  )
}