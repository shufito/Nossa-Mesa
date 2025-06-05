import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  Origami,
  SquareSlashIcon,
} from "lucide-react";
import { AlignJustify } from "lucide-react";

import PizzaSharingBro from "@/assets/PizzaSharingBro.svg";
import PizzaSharingPana from "@/assets/PizzaSharingPana.svg";
import OrderFoodAmico from "@/assets/OrderFoodAmico.svg";
import QRCodeAmico from "@/assets/QRCodeAmico.svg";
import EthnicFriendshipCuate from "@/assets/EthnicFriendshipCuate.svg";
import PizzaSharingCuate from "@/assets/PizzaSharingCuate.svg";

export const Route = createFileRoute("/")({
  component: Index,
});

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Preços", href: "#precos" },
];

function Index() {
  return (
    <div className="min-h-screen scroll-smooth">
      {/* Hero Section */}
      <section className="text-center px-4 bg-muted bg-[url(src/assets/light-patten.svg)] min-h-svh flex items-center">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <SquareSlashIcon className="h-8 text-primary" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <AlignJustify aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
              <Link to="/auth/signin">
                <Button variant={"outline"} size={"sm"}>
                  Entrar
                </Button>
              </Link>
              <Button variant={"default"} size={"sm"}>
                Inscrever-se
              </Button>
            </div>
          </nav>
        </header>
        <div className="mx-auto max-w-2xl py-40">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-accent-foregroundcent-foreground sm:text-7xl">
            Divida suas contas com facilidade
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
            Nosso app ajuda você a registrar pedidos e calcular quanto cada
            pessoa deve pagar, de forma simples e rápida.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button type="button" className="cursor-pointer">
              Experimente grátis
            </Button>
            <Button variant={"outline"}>
              Saiba mais <ArrowDownIcon />
            </Button>
          </div>
        </div>
      </section>

      <div className="">
        {/* Seção 1 */}
        <section className="py-24 sm:py-32 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 max-w-7xl mx-auto items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Divisão inteligente</h2>
            <p className="text-muted-foreground tracking-normal mb-6">
              <strong>Sem mais confusão na hora de pagar a conta.</strong> Com
              nosso app, você divide facilmente qualquer item entre duas, três
              ou dez pessoas — <strong>com cálculo automático</strong>, justo e
              sem dor de cabeça.
            </p>
            <dl className="space-y-6 text-base/7 text-gray-600">
              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <Origami
                    aria-hidden="true"
                    className="absolute top-1 left-1 size-5 text-primary"
                  />
                  Divisão flexível
                </dt>
                <dd className="mt-1">
                  Escolha entre dividir igualmente ou proporcionalmente, item
                  por item.
                </dd>
              </div>

              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <Origami
                    aria-hidden="true"
                    className="absolute top-1 left-1 size-5 text-primary"
                  />
                  Atualização em tempo real
                </dt>
                <dd className="mt-1">
                  Veja os valores se ajustarem automaticamente conforme os
                  pedidos são adicionados.
                </dd>
              </div>

              <div className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <Origami
                    aria-hidden="true"
                    className="absolute top-1 left-1 size-5 text-primary"
                  />
                  Sem discussões
                </dt>
                <dd className="mt-1">
                  Todos visualizam o que devem pagar. Clareza total, sem margem
                  para dúvidas.
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <img src={PizzaSharingBro} alt="Dividindo conta" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="bg-[url(src/assets/light-patten.svg)] relative isolate overflow-hidden bg-muted px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:py-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="animate-pulse absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#22c55e" />
                  <stop offset={1} stopColor="#00c951" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-accent-foregroundcent-foreground sm:text-4xl">
                Ideal para grupos
              </h2>
              <p className="mt-6 text-base/8 text-pretty text-muted-foreground">
                <strong>Happy hour, rodízio, viagem ou vaquinha?</strong> Não
                importa a ocasião — o app é perfeito para{" "}
                <strong>organizar os gastos em grupo</strong> de forma prática e
                intuitiva.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Button variant={"default"}>Começar agora</Button>
                <Button variant={"ghost"}>
                  Saiba mais <ArrowRightIcon />
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative h-80 mt-0 -z-10">
              <img
                alt="App screenshot"
                src={PizzaSharingPana}
                width={1824}
                height={1080}
                className="absolute top-0 -left-55 w-228 max-w-none"
              />
            </div>
          </div>
        </section>

        {/* Seção 3 */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-base font-semibold text-primary">
              Solução na sua mão
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-accent-foregroundcent-accent-foreground sm:text-5xl">
              Dividir a conta nunca foi tão fácil
            </p>
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg lg:rounded-l-4xl"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-accent-foregroundcent-foreground max-lg:text-center">
                      Divisão por item
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Atribua quem consumiu o quê com poucos cliques. Cada item
                      pode ser dividido entre várias pessoas.
                    </p>
                  </div>
                  <div className="relative min-h-120 w-full grow">
                    <div className="absolute top-10 right-0 bottom-0 left-0 overflow-hidden">
                      <img
                        className="w-full max-lg:max-w-xs"
                        src={OrderFoodAmico}
                        alt="Uso em grupo"
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
              </div>

              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-accent-foregroundcent-foreground max-lg:text-center">
                      Visão geral clara
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Um resumo transparente de quanto cada pessoa deve pagar —
                      sem dúvidas ou surpresas.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                    <img
                      className="w-full max-lg:max-w-xs"
                      src={EthnicFriendshipCuate}
                      alt="Resumo detalhado"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
              </div>

              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-white"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-accent-foregroundcent-foreground max-lg:text-center">
                      Sem contas erradas
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      O sistema calcula tudo por você, com total precisão. Nada
                      de sobras ou valores quebrados.
                    </p>
                  </div>
                  <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                    <img
                      className="w-full max-lg:max-w-xs"
                      src={PizzaSharingCuate}
                      alt="Cálculo automático"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
              </div>

              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-accent-foregroundcent-foreground max-lg:text-center">
                      Pronto para qualquer ocasião
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Seja no bar, pizzaria, viagem ou delivery. Nosso app
                      facilita a divisão para qualquer tipo de encontro.
                    </p>
                  </div>
                  <div className="relative min-h-120 w-full grow">
                    <div className="absolute top-10 right-0 bottom-0 left-0 overflow-hidden">
                      <img
                        className="w-full max-lg:max-w-xs"
                        src={QRCodeAmico}
                        alt="Uso em grupo"
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Pricing Section */}
      <section
        id={"precos"}
        className="py-16 px-4 text-center bg-muted bg-[url(src/assets/light-patten.svg)]"
      >
        <h2 className="text-4xl font-bold mb-8">Planos</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-2xl font-semibold mb-2">Gratuito</h3>
            <p className="mb-4">Ideal para encontros casuais</p>
            <ul className="text-left mb-6 space-y-2">
              <li>- Até 5 pessoas por divisão</li>
              <li>- Número ilimitado de itens</li>
              <li>- Visualização dos totais</li>
            </ul>
            <Button className="w-full">Usar grátis</Button>
          </div>

          <div className="bg-white shadow rounded p-6 border-2 border-blue-600">
            <h3 className="text-2xl font-semibold mb-2">Pro - R$9,90/mês</h3>
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

      <footer>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />

                <span className="self-center text-2xl font-semibold whitespace-nowrap text-accent-foreground">
                  Nossa mesa
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-accent-foreground">
                  Siga-nos
                </h2>
                <ul className="text-muted-foreground text-sm font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/shufito"
                      className="hover:underline"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-accent-foreground">
                  Legal
                </h2>
                <ul className="text-muted-foreground text-sm font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Política de Privacidade
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Termos de Serviço
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 sm:mx-auto border-muted lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-muted-foreground sm:text-center">
              Todos os direitos reservados. &copy;{" "}
              <a href="https://github.com/shufito" className="hover:underline">
                Shufito™
              </a>{" "}
              - {new Date().getFullYear()}.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://github.com/shufito"
                className="text-muted-foreground hover:text-foreground ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
