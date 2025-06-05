import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formatCurrency } from "@/lib/utils";
import type { Mesa } from "@/type";
import { itens, pessoas } from "@/db";
import { useState } from "react";

import { v4 as uuid } from "uuid";

const formSchema = z.object({
  descricao: z.string().min(1, {
    message: "A descrição deve ter pelo menos 1 caracteres.",
  }),
  quantidade: z.coerce.number({
    invalid_type_error: "Deve haver uma quantidade",
  }),
  valorUnitario: z.coerce.number(),
  valorTotal: z.coerce.number(),
});

export function FormItens({ mesa }: { mesa: Mesa }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      descricao: "",
      quantidade: undefined,
      valorUnitario: 0,
      valorTotal: 0,
    },
  });
  const pessoasDaMesa = pessoas.filter((p) => p.mesaId === mesa.id);
  const [pagantesPorPessoa, setPagantesPorPessoa] = useState(
    pessoasDaMesa.map((pessoa) => ({
      pessoaId: pessoa.id,
      quantidade: 0,
      total: 0,
    }))
  );

  const quantidade = form.watch("quantidade");
  const valorUnitario = form.watch("valorUnitario");
  const valorTotal = form.watch("valorTotal");

  const quantidadeUsada = pagantesPorPessoa.reduce(
    (acc, p) => acc + p.quantidade,
    0
  );
  const valorUsado = pagantesPorPessoa.reduce((acc, p) => acc + p.total, 0);

  const quantidadeRestante = quantidade - quantidadeUsada;
  const valorRestante = +(valorTotal - valorUsado).toFixed(2);

  function adicionarItem(values: z.infer<typeof formSchema>) {
    console.log(values);
    const valorTotal = quantidade * valorUnitario;
    const novoItem = {
      id: uuid(),
      mesaId: mesa.id,
      descricao: values.descricao,
      quantidade,
      valorUnitario,
      valorTotal,
      pagantes: pagantesPorPessoa.filter((p) => p.quantidade > 0),
    };
    console.log(novoItem);
    itens.push(novoItem);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" size={"sm"}>
          <PlusCircle /> Adicionar item
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>Adicionar item</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(adicionarItem)}
            className="space-y-8"
          >
            <div className="grid gap-4 col-span-3">
              <FormField
                control={form.control}
                name="descricao"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantidade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantidade</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="0"
                        value={field.value ?? ""}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/\D/g, "");
                          const novaQuantidade =
                            raw === "" ? undefined : parseInt(raw);

                          field.onChange(novaQuantidade);

                          setTimeout(() => {
                            const valores = form.getValues();
                            const q = valores.quantidade;

                            if (q && valorUnitario) {
                              form.setValue(
                                "valorTotal",
                                +(q * valorUnitario).toFixed(2)
                              );
                            } else if (q && valorTotal) {
                              form.setValue(
                                "valorUnitario",
                                +(valorTotal / q).toFixed(2)
                              );
                            }
                          }, 0);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="valorUnitario"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço Unitário</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="R$ 0,00"
                        disabled={!quantidade}
                        value={formatCurrency(field.value)}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/\D/g, ""); // remove tudo que não for número
                          const float = parseFloat(raw) / 100;
                          field.onChange(float); // envia como número para o formulário

                          if (quantidade && float) {
                            form.setValue(
                              "valorTotal",
                              +(float * quantidade).toFixed(2)
                            );
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="valorTotal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valor total</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="R$ 0,00"
                        disabled={!quantidade}
                        value={formatCurrency(field.value)}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/\D/g, ""); // remove tudo que não for número
                          const float = parseFloat(raw) / 100;
                          field.onChange(float); // envia como número para o formulário

                          if (quantidade && float) {
                            form.setValue(
                              "valorUnitario",
                              +(float / quantidade).toFixed(2)
                            );
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-4">
              <FormLabel>Divisão entre pessoas</FormLabel>
              {pagantesPorPessoa.map((p) => {
                const pessoa = pessoas.find((pes) => pes.id === p.pessoaId);
                const valorUnitario = quantidade ? valorTotal / quantidade : 0;

                return (
                  <div key={p.pessoaId} className="flex items-center gap-2">
                    <span className="w-32">{pessoa?.nome}</span>

                    {/* Quantidade */}
                    <Input
                      className="w-20"
                      disabled={!quantidade}
                      type="number"
                      min={0}
                      max={p.quantidade + quantidadeRestante}
                      value={p.quantidade}
                      onChange={(e) => {
                        const novaQuantidade = parseInt(e.target.value) || 0;
                        const limite = p.quantidade + quantidadeRestante;
                        if (novaQuantidade > limite) return;
                        setPagantesPorPessoa((prev) =>
                          prev.map((item) =>
                            item.pessoaId === p.pessoaId
                              ? {
                                  ...item,
                                  quantidade: novaQuantidade,
                                  total: +(
                                    novaQuantidade * valorUnitario
                                  ).toFixed(2),
                                }
                              : item
                          )
                        );
                      }}
                    />

                    {/* Valor */}
                    <Input
                      className="w-20"
                      disabled={!quantidade}
                      value={formatCurrency(p.total)}
                      onChange={(e) => {
                        const raw = e.target.value.replace(/\D/g, "");
                        const novoTotal = parseFloat(raw) / 100 || 0;
                        const limite = p.total + valorRestante;
                        if (novoTotal > limite || novoTotal < 0) return;
                        const novaQuantidade = valorUnitario
                          ? Math.round(novoTotal / valorUnitario)
                          : 0;

                        setPagantesPorPessoa((prev) =>
                          prev.map((item) =>
                            item.pessoaId === p.pessoaId
                              ? {
                                  ...item,
                                  total: novoTotal,
                                  quantidade: novaQuantidade,
                                }
                              : item
                          )
                        );
                      }}
                    />
                  </div>
                );
              })}
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
