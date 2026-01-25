"use client";

import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Volunteer } from "@/types/models";
import { IconSearch, IconX } from "@tabler/icons-react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { DataTableColumnToggle } from "@/components/ui/data-table-column-toggle";
import { DataTableDataExport } from "@/components/ui/data-table-data-export";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { VolunteerActions } from "./volunteer-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export function VolunteersDataTable({ data }: { data: Volunteer[] }) {
  // Columns Definition
  const columns = useMemo<ColumnDef<Volunteer>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && false)
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
      },
      {
        id: "id",
        accessorKey: "id",
        header: "ID",
        enableHiding: false,
      },
      {
        id: "name",
        accessorKey: "name",
        header: ({ column }) => (
          <DataTableColumnHeader title="Name" column={column} />
        ),
      },
      {
        id: "email",
        accessorKey: "email",
        header: ({ column }) => (
          <DataTableColumnHeader title="Email" column={column} />
        ),
      },
      {
        id: "phone",
        accessorKey: "phone",
        header: "Phone",
      },
      {
        id: "Status",
        accessorKey: "status",
        header: ({ column }) => (
          <DataTableColumnHeader title="Status" column={column} />
        ),
        cell: ({ row }) => {
          const status = row.original.status;
          return (
            <Badge variant={status === "Active" ? "default" : "destructive"}>
              {status}
            </Badge>
          );
        },
      },
      {
        id: "date registered",
        accessorKey: "created_at",
        header: ({ column }) => (
          <DataTableColumnHeader title="Date Registered" column={column} />
        ),
        cell: ({ row }) =>
          new Date(row.original.created_at).toLocaleDateString(),
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => <VolunteerActions volunteer={row.original} />,
        enableHiding: false,
      },
    ],
    [],
  );

  // Sorting State
  const [sorting, setSorting] = useState<SortingState>([]);

  // Pagination State
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // Column Visibility State
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  // Column Filters State
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  // Global Filters State
  const [globalFilter, setGlobalFilter] = useState<string>("");

  // Table Definition
  const table = useReactTable({
    data,
    columns,
    globalFilterFn: "includesString",

    // pageCount: Math.ceil((data.length || 0) / pagination.pageSize),

    state: {
      sorting,
      pagination,
      globalFilter,
      columnFilters,
      columnVisibility,
    },

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4">
        <InputGroup className="max-w-sm">
          <InputGroupAddon>
            <IconSearch />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search..."
            value={globalFilter}
            onChange={(e) => table.setGlobalFilter(String(e.target.value))}
          />
          {globalFilter && (
            <InputGroupAddon align={"inline-end"}>
              <InputGroupButton
                variant={"ghost"}
                size={"icon-xs"}
                onClick={() => table.setGlobalFilter("")}
              >
                <IconX />
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </InputGroup>
        <div className="flex items-center gap-4">
          <DataTableDataExport title="Volunteers" table={table} />
          <DataTableColumnToggle table={table} />
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
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
  );
}
