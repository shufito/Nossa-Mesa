import { v4 as uuid } from "uuid";
import { itensAtom, mesasAtom, pessoasAtom } from "@/db";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAtom } from "jotai";
import type { Mesa } from "@/type";
import { useParams } from "@tanstack/react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Plus } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(1, {
    message: "O nome deve ter pelo menos 1 caracteres.",
  }),
});

export function ListaPessoasMesa() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
    },
  });
  const [mesas] = useAtom(mesasAtom);
  const [pessoas, setPessoas] = useAtom(pessoasAtom);
  const [itens] = useAtom(itensAtom);
  const [pessoaSelecionada, setPessoaSelecionada] = useState<string | null>(
    null
  );

  const { mesaId } = useParams({ from: "/app/mesa/$mesaId" });
  if (!mesaId) {
    return <div className="p-4 text-red-500">ID da mesa não informado</div>;
  }

  const mesa = mesas.find((m) => m.id === mesaId) as Mesa;

  if (!mesa) {
    return <div className="p-4 text-red-500">Mesa não encontrada</div>;
  }

  const pessoasDaMesa = pessoas.filter((p) => p.mesaId === mesa.id);
  const itensDaMesa = itens.filter((i) => i.mesaId === mesa.id);

  function adicionarPessoa(values: z.infer<typeof formSchema>) {
    const novaPessoa = {
      id: uuid(),
      nome: values.nome,
      mesaId: mesa.id,
    };

    setPessoas((prev) => [...prev, novaPessoa]);
    form.resetField("nome");
  }

  return (
    <div className="flex h-full flex-1 flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Pessoas</h2>
      </div>
      <div className="space-y-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(adicionarPessoa)}
            className="flex gap-2 justify-between"
          >
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Nome da pessoa"
                      className="h-8 w-[250px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size={"sm"}>
              <Plus />
            </Button>
          </form>
        </Form>
        <ul>
          {pessoasDaMesa.map((p) => {
            const total = itensDaMesa.reduce((soma, item) => {
              const pagante = item.pagantes.find((pp) => pp.pessoaId === p.id);
              if (!pagante) return soma;
              const valorPorPedaço = item.valorUnitario;
              return soma + pagante.quantidade * valorPorPedaço;
            }, 0);

            return (
              <li key={p.id} className="mb-1">
                <Button
                  variant={"outline"}
                  onClick={() =>
                    setPessoaSelecionada(
                      p.id === pessoaSelecionada ? null : p.id
                    )
                  }
                  className="text-left w-full flex justify-between items-center"
                >
                  <span>👤 {p.nome}</span>
                  <span className="font-mono text-sm">
                    R$ {total.toFixed(2)}
                  </span>
                </Button>

                {/* Detalhamento */}
                {pessoaSelecionada === p.id && (
                  <ul className="ml-4 mt-1 text-sm text-gray-700">
                    {itensDaMesa.map((item) => {
                      const pagante = item.pagantes.find(
                        (pp) => pp.pessoaId === p.id
                      );
                      if (!pagante || pagante.quantidade === 0) return null;

                      const valorPorPedaço = item.valorUnitario;
                      const totalItem = pagante.quantidade * valorPorPedaço;

                      return (
                        <li key={item.id}>
                          🍽️ {item.descricao}: {pagante.quantidade}{" "}
                          {valorPorPedaço.toFixed(2)} ={" "}
                          <strong>R$ {totalItem.toFixed(2)}</strong>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
