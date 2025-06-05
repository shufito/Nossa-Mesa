import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import OrderFoodPana from "@/assets/OrderFoodPana.svg";
import { Link } from "@tanstack/react-router";
export function SigninForm() {
  return (
    <>
      <form className="p-6 md:p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">Bem vindo de voltas</h1>
            <p className="text-muted-foreground text-balance text-xs">
              Bem-vindo de volta, por favor insira seus dados
            </p>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Senha</Label>
              <a
                href="#"
                className="ml-auto text-xs text-muted-foreground underline-offset-2 hover:underline"
              >
                Esqueceu sua senha?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" asChild>
            <Link to="/app/home" className="">
              Conecte-se
            </Link>
          </Button>
          <div className="text-accent-foreground text-center text-sm">
            Não tem uma conta?{" "}
            <Link to="/auth/signup" className="">
              Inscrever-se
            </Link>
          </div>
        </div>
      </form>
      <div className="bg-muted relative hidden md:block">
        <img
          src={OrderFoodPana}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </>
  );
}
