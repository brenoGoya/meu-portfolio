import { Cabecalho } from "./components/Cabecalho";
import { Contato } from "./components/Contato";
import { Rodape } from "./components/Rodape";
import { Painel } from "./components/Painel";
import { habilidades, perfil, projetos } from "./dados";
import { ListaHabilidades } from "./components/ListaHabilidades";
import { CardProjeto } from "./components/CardProjeto";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <main className="mx-auto max-w-3xl space-y-12 px-6 py-12">
        <Cabecalho perfil={perfil} />
        <Painel titulo="Portfolio">
          <p className="leading-relaxed text-slate-600">
            Engenheiro Agrônomo e estudante de Análise e desenvolvimenteo de
            Sistemas
          </p>
        </Painel>
        <Painel titulo="Habilidades">
          <ListaHabilidades habilidades={habilidades} />
        </Painel>
        <Painel titulo="Projetos">
          <div className="grid gap-4 sm:grid-cols-2">
            {projetos.map((p) => (
              <CardProjeto key={p.id} projeto={p} />
            ))}
          </div>
        </Painel>
        <Painel titulo="Contato">
          <Contato perfil={perfil} />
        </Painel>
        <Rodape perfil={perfil} />
      </main>
    </div>
  );
}
