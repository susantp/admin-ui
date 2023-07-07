"use client"

import React from "react"
import useTempData
  from "@/src/modules/dashboard/data/datasources/dashboard-datasource"
import Section
  from "@/src/modules/dashboard/presentation/components/dashboard-components/section";
import MostViewedWrapper
  from "@/src/modules/dashboard/presentation/components/dashboard-components/most-viewed-wrapper";
import InfoBox
  from "@/src/modules/dashboard/presentation/components/dashboard-components/info-box";
import PocTable from "@/src/modules/global/presentation/components/poc-table";
import PocTablePagination
  from "@/src/modules/global/presentation/components/poc-table-pagination";
import PocTableTools
  from "@/src/modules/global/presentation/components/poc-table-tools";
import PocTableWrapper
  from "@/src/modules/global/presentation/components/poc-table-wrapper";

export default function Dashboard(): JSX.Element {
  const {projects, people} = useTempData()
  return (
    <div className="p-4 sm:px-6 md:px-8" id="content-section">
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
    </div>
  )
}
