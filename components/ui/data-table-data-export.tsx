"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  IconDownload,
  IconFileSpreadsheet,
  IconFileText,
} from "@tabler/icons-react";
import { Table } from "@tanstack/react-table";
import { utils, writeFile } from "xlsx";

export function DataTableDataExport<TData>({
  table,
  title,
}: {
  table: Table<TData>;
  title: string;
}) {
  // Export to Excel function
  const exportToExcel = () => {
    const selectedRows = table.getSelectedRowModel().rows;

    const dataToExport =
      selectedRows.length > 0
        ? selectedRows.map((row) => row.original)
        : table.getFilteredRowModel().rows.map((row) => row.original);

    const worksheet = utils.json_to_sheet(dataToExport);
    const workbook = utils.book_new();

    utils.book_append_sheet(workbook, worksheet, title);

    const cols = [
      { wch: 10 },
      { wch: 20 },
      { wch: 15 },
      { wch: 25 },
      { wch: 15 },
    ];

    worksheet["!cols"] = cols;

    writeFile(
      workbook,
      `${title}-Report-${new Date().toISOString().split("T")[0]}.xlsx`,
    );
  };

  // Export to JSON function
  const exportToJSON = () => {
    const selectedRows = table.getSelectedRowModel().rows;

    const dataToExport =
      selectedRows.length > 0
        ? selectedRows.map((row) => row.original)
        : table.getFilteredRowModel().rows.map((row) => row.original);

    const json = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `${title}-Report-${new Date().toISOString().split("T")[0]}.json`,
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant={"outline"}>
            <IconDownload />
            Export
          </Button>
        }
      />
      <DropdownMenuContent align={"end"} className={"min-w-44"}>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={exportToExcel}>
            <IconFileSpreadsheet />
            Export as Excel
          </DropdownMenuItem>
          <DropdownMenuItem onClick={exportToJSON}>
            <IconFileText />
            Export as JSON
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
