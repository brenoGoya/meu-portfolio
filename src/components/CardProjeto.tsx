import type { Projeto } from "../types";

type CardProjetoProps = {
  projeto: Projeto;
};

export function CardProjeto({ projeto }: Readonly<CardProjetoProps>) {
  return (
    <article className="rounded-lg border border-slate-200 p-4 transition hover:border-slate-400">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold">{projeto.titulo}</h3>
        {projeto.emAndamento && (
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
            em andamento
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-slate-600">{projeto.descricao}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {projeto.tecnologias.map((tec) => (
          <li
            key={tec}
            className="rounded-full bg-slate-100 px-2 py-0.5 text-xs"
          >
            {tec}
          </li>
        ))}
      </ul>
      {projeto.link ? (
        <a
          href={projeto.link}
          className="mt-3 inline-block text-sm text-slate-600 underline hover:text-slate-900"
        >
          Ver código no Github
        </a>
      ) : (
        <p className="mt-3 text-sm text-slate-400">Link em breve</p>
      )}
    </article>
  );
}
