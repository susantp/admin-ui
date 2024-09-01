"use client"

import React, { ReactElement } from "react"
import { usePathname } from "next/navigation"

import { capitalizeFirstLetter } from "@/core/utils/helpers"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function BreadcrumbComponent(): ReactElement {
  const pathname = usePathname()
  const pathArray = pathname.split("/")
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathArray.map(
          (item, i) =>
            i !== 0 && (
              <>
                <BreadcrumbItem className="text-sm text-primary-foreground">
                  <BreadcrumbLink href={"/".concat(item)}>
                    {capitalizeFirstLetter(item)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {i !== pathArray.length - 1 && (
                  <BreadcrumbSeparator className="text-sm text-primary-foreground" />
                )}
              </>
            )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
