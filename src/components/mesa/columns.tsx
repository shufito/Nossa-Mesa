"use client";

import { formatCurrency } from "@/lib/utils";
import type { Item } from "@/type";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "descricao",
    header: "Descrição",
  },
  {
    accessorKey: "quantidade",
    header: "Quantidade",
  },
  {
    accessorKey: "valorUnitario",
    header: "Valor Unitário",
    cell: ({ cell }) => {
      const raw = cell.getValue() as string;
      return formatCurrency(raw);
    },
  },
  {
    accessorKey: "valorTotal",
    header: "Valor Total",
    cell: ({ cell }) => {
      const raw = cell.getValue() as string;
      return formatCurrency(raw);
    },
  },
];
