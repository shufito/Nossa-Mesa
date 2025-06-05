"use client";

import type { Mesa } from "@/type";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const columns: ColumnDef<Mesa>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "descricao",
    header: "Descrição",
  },
  {
    accessorKey: "data",
    header: "Data",
    cell: ({ cell }) => {
      const raw = cell.getValue() as string;
      const date = new Date(raw);
      return isNaN(date.getTime()) ? "Data inválida" : date.toLocaleString();
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <Button asChild size={"sm"}>
          <Link to={"/app/mesa/$mesaId"} params={{ mesaId: payment.id }}>
            Acessar
          </Link>
        </Button>
      );
    },
  },
];
