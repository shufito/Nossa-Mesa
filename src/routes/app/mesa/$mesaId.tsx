// import { createFileRoute } from "@tanstack/react-router";
// import { mesas, pessoas, itens } from "@/db";
// import { useState } from "react";
// import { v4 as uuid } from "uuid";
// import type { Mesa } from "@/type";

// export const Route = createFileRoute("/app/mesa/$mesaId")({
//   component: RouteComponent,
// });

// function RouteComponent() {
//   const { mesaId } = Route.useParams();
//   const mesa = mesas.find((m) => m.id === mesaId) as Mesa | undefined;
//   const [nomePessoa, setNomePessoa] = useState("");
//   const [descricaoItem, setDescricaoItem] = useState("");
//   const [quantidade, setQuantidade] = useState(1);
//   const [valorUnitario, setValorUnitario] = useState(0);
//   const [subUnidadeNome, setSubUnidadeNome] = useState("pedaço");
//   const [subUnidadeTotal, setSubUnidadeTotal] = useState(1);
//   const [pagantesPorPessoa, setPagantesPorPessoa] = useState<
//     { pessoaId: string; quantidade: number }[]
//   >([]);
//   const [pessoaSelecionada, setPessoaSelecionada] = useState<string | null>(
//     null
//   );

//   if (!mesa) {
//     return <div className="p-4 text-red-500">Mesa não encontrada</div>;
//   }

//   const pessoasDaMesa = pessoas.filter((p) => p.mesaId === mesa.id);
//   const itensDaMesa = itens.filter((i) => i.mesaId === mesa.id);

//   function adicionarPessoa() {
//     if (!nomePessoa) return;
//     pessoas.push({
//       id: uuid(),
//       nome: nomePessoa,
//       mesaId: mesa.id,
//     });
//     setNomePessoa("");
//   }

//   function adicionarItem() {
//     const valorTotal = quantidade * valorUnitario;
//     const novoItem = {
//       id: uuid(),
//       mesaId: mesa.id,
//       descricao: descricaoItem,
//       quantidade,
//       unidade: "unidade",
//       subUnidadeNome,
//       subUnidadeTotal,
//       valorUnitario,
//       valorTotal,
//       pagantesPorSubUnidade: pagantesPorPessoa.filter((p) => p.quantidade > 0),
//     };
//     itens.push(novoItem);
//     setDescricaoItem("");
//     setQuantidade(1);
//     setValorUnitario(0);
//     setSubUnidadeNome("pedaço");
//     setSubUnidadeTotal(1);
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Mesa: {mesa.descricao}</h1>

//       {/* Pessoas */}
//       <section className="mb-6">
//         {/* Pessoas */}
//         <section className="mb-6">
//           <h2 className="text-xl font-semibold mb-2">Pessoas</h2>
//           <ul className="mb-2">
//             {pessoasDaMesa.map((p) => {
//               const total = itensDaMesa.reduce((soma, item) => {
//                 const pagante = item.pagantesPorSubUnidade.find(
//                   (pp) => pp.pessoaId === p.id
//                 );
//                 if (!pagante) return soma;
//                 const valorPorPedaço = item.valorTotal / item.subUnidadeTotal;
//                 return soma + pagante.quantidade * valorPorPedaço;
//               }, 0);

//               return (
//                 <li key={p.id} className="mb-1">
//                   <button
//                     onClick={() =>
//                       setPessoaSelecionada(
//                         p.id === pessoaSelecionada ? null : p.id
//                       )
//                     }
//                     className="text-left w-full flex justify-between items-center px-3 py-1 border rounded hover:bg-gray-100"
//                   >
//                     <span>👤 {p.nome}</span>
//                     <span className="font-mono text-sm">
//                       R$ {total.toFixed(2)}
//                     </span>
//                   </button>

//                   {/* Detalhamento */}
//                   {pessoaSelecionada === p.id && (
//                     <ul className="ml-4 mt-1 text-sm text-gray-700">
//                       {itensDaMesa.map((item) => {
//                         const pagante = item.pagantesPorSubUnidade.find(
//                           (pp) => pp.pessoaId === p.id
//                         );
//                         if (!pagante || pagante.quantidade === 0) return null;

//                         const valorPorPedaço =
//                           item.valorTotal / item.subUnidadeTotal;
//                         const totalItem = pagante.quantidade * valorPorPedaço;

//                         return (
//                           <li key={item.id}>
//                             🍽️ {item.descricao}: {pagante.quantidade}{" "}
//                             {item.subUnidadeNome}(s) × R${" "}
//                             {valorPorPedaço.toFixed(2)} ={" "}
//                             <strong>R$ {totalItem.toFixed(2)}</strong>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>

//           {/* Adicionar nova pessoa */}
//           <div className="flex gap-2">
//             <input
//               placeholder="Nome da pessoa"
//               value={nomePessoa}
//               onChange={(e) => setNomePessoa(e.target.value)}
//               className="border px-2 py-1"
//             />
//             <button
//               onClick={adicionarPessoa}
//               className="bg-green-500 text-white px-3 py-1 rounded"
//             >
//               Adicionar
//             </button>
//           </div>
//         </section>
//       </section>

//       {/* Itens */}
//       <section>
//         <h2 className="text-xl font-semibold mb-2">Itens</h2>
//         <ul className="mb-2">
//           {itensDaMesa.map((item) => (
//             <li key={item.id}>
//               🍕 {item.descricao} - {item.quantidade} {item.unidade}(s),{" "}
//               {item.subUnidadeTotal} {item.subUnidadeNome}(s) - R${" "}
//               {item.valorTotal.toFixed(2)}
//               <ul className="ml-4 text-sm text-gray-600">
//                 {item.pagantesPorSubUnidade.map((p) => {
//                   const pessoa = pessoas.find((pes) => pes.id === p.pessoaId);
//                   return (
//                     <li key={p.pessoaId}>
//                       {pessoa?.nome ?? "?"}: {p.quantidade}{" "}
//                       {item.subUnidadeNome}(s)
//                     </li>
//                   );
//                 })}
//               </ul>
//             </li>
//           ))}
//         </ul>

//         {/* Formulário de criação */}
//         <div className="grid grid-cols-2 gap-2 mb-2">
//           <input
//             placeholder="Descrição"
//             value={descricaoItem}
//             onChange={(e) => setDescricaoItem(e.target.value)}
//             className="border px-2 py-1"
//           />
//           <input
//             type="number"
//             placeholder="Quantidade"
//             value={quantidade}
//             onChange={(e) => setQuantidade(Number(e.target.value))}
//             className="border px-2 py-1"
//           />
//           <input
//             type="number"
//             placeholder="Valor unitário"
//             value={valorUnitario}
//             onChange={(e) => setValorUnitario(Number(e.target.value))}
//             className="border px-2 py-1"
//           />
//           <input
//             placeholder="Nome da subunidade"
//             value={subUnidadeNome}
//             onChange={(e) => setSubUnidadeNome(e.target.value)}
//             className="border px-2 py-1"
//           />
//           <input
//             type="number"
//             placeholder="Total subunidades"
//             value={subUnidadeTotal}
//             onChange={(e) => setSubUnidadeTotal(Number(e.target.value))}
//             className="border px-2 py-1"
//           />
//         </div>

//         {/* Divisão entre pessoas */}
//         <div className="mb-2">
//           <h3 className="font-semibold">Divisão por {subUnidadeNome}</h3>
//           {pessoasDaMesa.map((p) => (
//             <div key={p.id} className="flex items-center gap-2 mb-1">
//               <label className="w-24">{p.nome}</label>
//               <input
//                 type="number"
//                 min={0}
//                 className="border px-2 py-1 w-20"
//                 value={
//                   pagantesPorPessoa.find((pp) => pp.pessoaId === p.id)
//                     ?.quantidade ?? 0
//                 }
//                 onChange={(e) => {
//                   const qtd = Number(e.target.value);
//                   setPagantesPorPessoa((prev) => {
//                     const copy = [...prev];
//                     const idx = copy.findIndex((pp) => pp.pessoaId === p.id);
//                     if (idx !== -1) {
//                       copy[idx].quantidade = qtd;
//                     } else {
//                       copy.push({ pessoaId: p.id, quantidade: qtd });
//                     }
//                     return copy;
//                   });
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={adicionarItem}
//           className="bg-blue-500 text-white px-3 py-1 rounded"
//         >
//           Adicionar Item
//         </button>
//       </section>
//     </div>
//   );
// }

import { createFileRoute, Link } from "@tanstack/react-router";
import { itensAtom, mesasAtom } from "@/db";
import { Button } from "@/components/ui/button";
import { ArrowLeftToLineIcon } from "lucide-react";
import { useAtom } from "jotai";
import type { Mesa } from "@/type";
import { DataTable } from "@/components/mesa/data-table";
import { columns } from "@/components/mesa/columns";
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
            <DataTable columns={columns} data={itensDaMesa} />
          </div>
        </section>
        <section className="col-span-3">
          <ListaPessoasMesa />
        </section>
      </div>
    </div>
  );
}
