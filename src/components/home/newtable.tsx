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
import { useNavigate } from "@tanstack/react-router";
import { v4 as uuid } from "uuid";
import { useAtom } from "jotai";
import { mesasAtom } from "@/db";
import type { Mesa } from "@/type";

const formSchema = z.object({
  descricao: z.string().min(5, {
    message: "A descrição deve ter pelo menos 5 caracteres.",
  }),
});

export function NewTable() {
  const navigate = useNavigate();
  const [, setMesas] = useAtom(mesasAtom);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      descricao: "",
    },
  });

  function criarMesa(values: z.infer<typeof formSchema>) {
    const novaMesa: Mesa = {
      id: uuid(),
      descricao: values.descricao,
      data: new Date(),
      status: "aberta",
    };
    setMesas((prev) => [...prev, novaMesa]);
    navigate({ to: `/app/mesa/${novaMesa.id}` });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" size={"sm"}>
          <PlusCircle /> Nova Mesa
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nova Mesa</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(criarMesa)} className="space-y-8">
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="descricao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
