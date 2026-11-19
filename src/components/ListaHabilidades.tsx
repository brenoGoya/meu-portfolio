import type { Habilidade } from "../types";

type ListaHabilidadeProps = {
  habilidades: Habilidade[];
};

export function ListaHabilidades({
  habilidades,
}: Readonly<ListaHabilidadeProps>) {
  return (
    <ul className="space-y-2">
      {habilidades.map((h) => (
        <li
          key={h.id}
          className="flex justify-between border-b border-slate-100 pb-2"
        >
          <span>{h.nome}</span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">
            {h.nivel}
          </span>
        </li>
      ))}
    </ul>
  );
}
