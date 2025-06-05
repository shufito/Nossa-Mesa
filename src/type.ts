// types.ts

export type MesaStatus = "aberta" | "fechada";

export interface Mesa {
  id: string;
  descricao: string;
  data: Date;
  status: MesaStatus;
  adicionais?: {
    descricao: string;
    valor: number;
    unidade: "real" | "porcentagem";
  }[];
}

export interface Pessoa {
  id: string;
  nome: string;
  mesaId: string;
}

export interface Item {
  id: string;
  mesaId: string;
  descricao: string;
  quantidade: number; // unidades inteiras
  valorUnitario: number; // valor da unidade principal (ex: 1 pizza = 20 reais)
  valorTotal: number; // calculado
  pagantes: {
    pessoaId: string;
    quantidade: number; // quantos pedaços essa pessoa pagou
  }[]; // IDs das pessoas
}
