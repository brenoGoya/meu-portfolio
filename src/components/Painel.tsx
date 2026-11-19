import type { ReactNode } from "react";

type PainelProps = {
  titulo: string;
  children: ReactNode;
};

export function Painel({ titulo, children }: Readonly<PainelProps>) {
  return (
    <section>
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
        {titulo}
      </h2>
      {children}
    </section>
  );
}
