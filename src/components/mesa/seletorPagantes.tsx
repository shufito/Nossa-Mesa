import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, PlusCircle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function SeletorPagantes({
  pessoas,
  selecionados,
  setSelecionados,
}: {
  pessoas: { id: string; nome: string }[];
  selecionados: string[];
  setSelecionados: (ids: string[]) => void;
}) {
  const selecionadosSet = new Set(selecionados);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          Pagantes
          {selecionados.length > 0 && (
            <Badge className="ml-2" variant="secondary">
              {selecionados.length}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="center">
        <Command>
          <CommandInput placeholder="Buscar pessoa..." />
          <CommandList>
            <CommandEmpty>Ninguém encontrado</CommandEmpty>
            <CommandGroup>
              {pessoas.map((pessoa) => {
                const isSelected = selecionadosSet.has(pessoa.id);
                return (
                  <CommandItem
                    key={pessoa.id}
                    onSelect={() => {
                      const novaLista = isSelected
                        ? selecionados.filter((id) => id !== pessoa.id)
                        : [...selecionados, pessoa.id];
                      setSelecionados(novaLista);
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    {pessoa.nome}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selecionados.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => setSelecionados([])}
                    className="justify-center text-center"
                  >
                    Limpar seleção
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
