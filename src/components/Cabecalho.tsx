import type { Perfil } from "../types";

type CabecalhoProps = {
  perfil: Perfil;
};

export function Cabecalho({ perfil }: Readonly<CabecalhoProps>) {
  return (
    <header className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
      <img
        src={perfil.avatarUrl ?? "https://placehold.co/96"}
        alt={`foto de ${perfil.nome}`}
        className="size-24 rounded-full"
      />
      <div>
        <h1 className="text-3xl font-bold">{perfil.nome}</h1>
        <p className="text-slate-600">
          {perfil.curso} - {perfil.periodo}º período
        </p>
        <nav className="mt-2 flex justify-center gap-4 text-sm sm:justify-start">
          <a
            href={perfil.github}
            className="text-slate-600 underline hover:text-slate-900"
          >
            GitHub
          </a>
          {perfil.linkedin && (
            <a
              href={perfil.linkedin}
              className="text-slate-600 underline hover:text-slate-900"
            >
              LinkedIn
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
