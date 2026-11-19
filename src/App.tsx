import { Cabecalho } from "./components/Cabecalho";
import { Contato } from "./components/Contato";
import { Rodape } from "./components/Rodape";
import { Painel } from "./components/Painel";
import { perfil } from "./dados";

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
        <Painel titulo="Contato">
          <Contato perfil={perfil} />
        </Painel>
        <Rodape perfil={perfil} />
      </main>
    </div>
  );
}
