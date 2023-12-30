"use client"

import React, {ReactNode} from "react"
import useDashboardActions from "@/src/modules/dashboard/presentation/hooks/use-dashboard-actions";
import InfoBox from "@/src/modules/dashboard/presentation/components/info-box";
import PocLoader from "@/src/modules/global/presentation/components/poc-loader";


export default function MostViewedWrapper(): ReactNode {
    const {loading, topRoles} = useDashboardActions()
    if (loading || !topRoles || !topRoles.length) return <PocLoader/>
    return (
        <div
            id="most-viewed-wrapper"
            className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 sm:gap-6 lg:grid-cols-2"
        >
            {topRoles.map((role) => (
                <InfoBox key={role.id} role={role}/>
            ))}
        </div>
    )
}
