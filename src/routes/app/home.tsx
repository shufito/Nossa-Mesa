import { createFileRoute } from "@tanstack/react-router";
import { mesasAtom } from "@/db";
import { columns } from "@/components/home/columns";
import { DataTable } from "@/components/home/data-table";
import { useAtom } from "jotai";

export const Route = createFileRoute("/app/home")({
  component: HomePage,
});

function HomePage() {
  const [mesas] = useAtom(mesasAtom);
  return (
    <div className="flex h-full flex-1 flex-col space-y-8 p-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Bem-vindo!</h2>
        <p className="text-muted-foreground">Suas Mesas</p>
      </div>
      <DataTable columns={columns} data={mesas} />
    </div>
  );
}
