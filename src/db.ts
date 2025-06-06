// atoms/db.ts
import { atomWithStorage } from "jotai/utils";
import type { Mesa, Pessoa, Item } from "@/type";

// átomos reativos
export const mesasAtom = atomWithStorage<Mesa[]>("mesas", []);
export const pessoasAtom = atomWithStorage<Pessoa[]>("pessoas", []);
export const itensAtom = atomWithStorage<Item[]>("itens", []);
