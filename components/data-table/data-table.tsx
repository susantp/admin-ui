"use client"

import React, { useEffect } from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataQuery, DataResponse } from "@/components/data-table/data-response"
import { DataTablePagination } from "@/components/data-table/data-table-pagination"
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  dataFn: (query: DataQuery) => Promise<DataResponse<TData> | null>
  label: string
}

export function DataTable<TData, TValue>({
  columns,
  dataFn,
  label,
}: DataTableProps<TData, TValue>): JSX.Element {
  const [data, setData] = React.useState<TData[]>([])
  const [pageCount, setPageCount] = React.useState(0)

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [rowSelection, setRowSelection] = React.useState({})

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [globalFilter, setGlobalFilter] = React.useState("")

  useEffect(() => {
    dataFn({
      pageSize: pagination.pageSize,
      pageIndex: pagination.pageIndex + 1,
      globalFilter,
    })
      .then((res) => {
        if (res) {
          setData(res.results)
          setPageCount(res.total_page)
        }
      })
      .catch(() => {})
  }, [dataFn, pagination, globalFilter])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    pageCount,
    manualPagination: true,
    onPaginationChange: setPagination,

    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    enableRowSelection: true, // Use this to apply condition for row selection
    onRowSelectionChange: setRowSelection,

    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: (x: string) => {
      setPagination({ pageIndex: 0, pageSize: 10 })
      setGlobalFilter(x)
    },
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      pagination,
      rowSelection,
      sorting,

      columnFilters,
      globalFilter,
    },
  })

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} label={label} />
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="overflow-auto">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}
