import { createFileRoute, Link } from "@tanstack/react-router";
import { itensAtom, mesasAtom } from "@/db";
import { Button } from "@/components/ui/button";
import { ArrowLeftToLineIcon } from "lucide-react";
import { useAtom } from "jotai";
import type { Mesa } from "@/type";
import { DataTable } from "@/components/mesa/data-table";
import { ListaPessoasMesa } from "@/components/mesa/columnPessoas";

export const Route = createFileRoute("/app/mesa/$mesaId")({
  component: RouteComponent,
});

function RouteComponent() {
  const [mesas] = useAtom(mesasAtom);
  const [itens] = useAtom(itensAtom);
  const { mesaId } = Route.useParams();
  if (!mesaId) {
    return <div className="p-4 text-red-500">ID da mesa não informado</div>;
  }

  const mesa = mesas.find((m) => m.id === mesaId) as Mesa;

  if (!mesa) {
    return <div className="p-4 text-red-500">Mesa não encontrada</div>;
  }

  const itensDaMesa = itens.filter((i) => i.mesaId === mesa.id);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <Button size={"icon"} variant={"ghost"} asChild>
          <Link to="/app/home">
            <ArrowLeftToLineIcon />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Mesa: {mesa.descricao}</h1>
        <div></div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Itens */}
        <section className="col-span-9">
          <div className="flex h-full flex-1 flex-col space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Itens</h2>
            </div>
            <DataTable data={itensDaMesa} />
          </div>
        </section>
        <section className="col-span-3">
          <ListaPessoasMesa />
        </section>
      </div>
    </div>
  );
}
