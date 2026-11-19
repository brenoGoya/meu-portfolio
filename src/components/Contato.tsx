import type { Perfil } from "../types";

type ContatoProps = {
  perfil: Perfil;
};

export function Contato({ perfil }: Readonly<ContatoProps>) {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href={`mailto:${perfil.email}`}
        className="text-slate-600 underline hover:text-slate-900"
      >
        E-mail
      </a>
      <a
        href={perfil.github}
        className="text-slate-600 underline hover:text-slate-900"
      >
        GitHub
      </a>
    </div>
  );
}
