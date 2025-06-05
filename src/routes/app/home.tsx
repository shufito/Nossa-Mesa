import { createFileRoute } from "@tanstack/react-router";
import { mesas } from "@/db";
import { columns } from "@/components/home/columns";
import { DataTable } from "@/components/home/data-table";

export const Route = createFileRoute("/app/home")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of your tasks for this month!
        </p>
      </div>
      <DataTable columns={columns} data={mesas} />
    </div>
  );
}
