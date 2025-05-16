import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, DollarSign, Users } from "lucide-react";
import PizzaSharingBro from "@/assets/PizzaSharingBro.svg";
import EthnicFriendshipCuate from "@/assets/EthnicFriendshipCuate.svg";
import QRCodeAmico from "@/assets/QRCodeAmico.svg";
import OrderFoodAmico from "@/assets/OrderFoodAmico.svg";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-muted bg-[url(src/assets/light-patten.svg)]">
        <h1 className="text-4xl font-bold mb-4">
          Divida suas contas com facilidade
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Nosso app ajuda você a registrar pedidos e calcular quanto cada pessoa
          deve pagar, de forma simples e rápida.
        </p>
        <Button className="text-lg px-6 py-3">Começar agora</Button>
      </section>

      <div className="">
        {/* Seção 1 */}
        <section className="py-16 px-4 grid gap-12 md:grid-cols-2 max-w-5xl mx-auto items-center">
          <div>
            <img src={PizzaSharingBro} alt="Dividindo conta" />
          </div>
          <div className="flex items-start gap-4">
            <DollarSign className="w-12 h-12 text-green-600" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Divisão inteligente
              </h2>
              <p>
                Itens podem ser divididos entre múltiplas pessoas com cálculo
                automático de quanto cada um paga.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 2 (imagem do outro lado) */}
        <div className="bg-muted">
          <section className="py-16 px-4 grid gap-12 md:grid-cols-2 max-w-5xl mx-auto items-center bg-muted">
            <div className="md:order-2">
              <img src={EthnicFriendshipCuate} alt="Grupo de pessoas" />
            </div>
            <div className="flex items-start gap-4 md:order-1">
              <Users className="w-12 h-12 text-blue-600" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Ideal para grupos
                </h2>
                <p>
                  Perfeito para dividir a conta entre amigos, colegas de
                  trabalho, ou familiares em qualquer ocasião.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Seção 3 */}
        <section className="py-16 px-4 grid gap-12 md:grid-cols-2 max-w-5xl mx-auto items-center">
          <div>
            <img src={OrderFoodAmico} alt="Resumo da divisão" />
          </div>
          <div className="flex items-start gap-4">
            <ClipboardList className="w-12 h-12 text-yellow-600" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Resumo detalhado</h2>
              <p>
                Veja exatamente quanto cada pessoa deve pagar de forma clara e
                organizada. Sem confusão.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 4 (imagem do outro lado) */}
        <div className="bg-muted">
          <section className="py-16 px-4 grid gap-12 md:grid-cols-2 max-w-5xl mx-auto items-center bg-muted">
            <div className="md:order-2">
              <img src={QRCodeAmico} alt="Grupo de pessoas" />
            </div>
            <div className="flex items-start gap-4 md:order-1">
              <Users className="w-12 h-12 text-blue-600" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Ideal para grupos
                </h2>
                <p>
                  Perfeito para dividir a conta entre amigos, colegas de
                  trabalho, ou familiares em qualquer ocasião.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="py-16 px-4 text-center bg-[url(src/assets/light-patten.svg)]">
        <h2 className="text-3xl font-bold mb-8">Planos</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-xl font-semibold mb-2">Gratuito</h3>
            <p className="mb-4">Ideal para encontros casuais</p>
            <ul className="text-left mb-6 space-y-2">
              <li>- Até 5 pessoas por divisão</li>
              <li>- Número ilimitado de itens</li>
              <li>- Visualização dos totais</li>
            </ul>
            <Button className="w-full">Usar grátis</Button>
          </div>

          <div className="bg-white shadow rounded p-6 border-2 border-blue-600">
            <h3 className="text-xl font-semibold mb-2">Pro - R$9,90/mês</h3>
            <p className="mb-4">Perfeito para grupos e eventos frequentes</p>
            <ul className="text-left mb-6 space-y-2">
              <li>- Pessoas ilimitadas</li>
              <li>- Salve e compartilhe divisões</li>
              <li>- Suporte prioritário</li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Assinar Pro
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
