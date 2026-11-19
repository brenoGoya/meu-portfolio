import type { Perfil } from "../types";

type RodapeProps = {
  perfil: Perfil;
};

export function Rodape({ perfil }: Readonly<RodapeProps>) {
  const ano = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
      © {ano} {perfil.nome}
    </footer>
  );
}
