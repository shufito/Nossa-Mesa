"use client";

import { formatCurrency } from "@/lib/utils";
import type { Item } from "@/type";
import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/dt-col-header";
import { Button } from "@/components/ui/button";
import { ArrowUpRightFromSquareIcon } from "lucide-react";

export const columnsItens: ColumnDef<Item>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
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
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "descricao",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Descrição" />;
    },
    cell: ({ cell }) => {
      const raw = cell.getValue() as string;
      return (
        <Button variant={"linkblack"} size={"sm"}>
          {raw} <ArrowUpRightFromSquareIcon />
        </Button>
      );
    },
  },
  {
    accessorKey: "quantidade",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Quantidade" />;
    },
  },
  {
    accessorKey: "valorUnitario",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Valor Unitário" />;
    },
    cell: ({ cell }) => {
      const raw = cell.getValue() as string;
      return formatCurrency(raw);
    },
  },
  {
    accessorKey: "valorTotal",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Valor Total" />;
    },
    cell: ({ cell }) => {
      const raw = cell.getValue() as string;
      return formatCurrency(raw);
    },
  },
];
