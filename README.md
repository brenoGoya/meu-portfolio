# Meu Portfólio

Página de apresentação pessoal desenvolvida na disciplina Tecnologias para
Interfaces de Aplicações Web (IFTM), como parte da Atividade 1.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS v4

## Como executar

    npm install
    npm run dev

Acesse http://localhost:5173 no navegador.

## Estrutura

    src/
    ├── components/   componentes da interface
    ├── types.ts      tipos Perfil, Habilidade e Projeto
    ├── dados.ts      conteúdo do portfólio
    └── App.tsx       composição da página

## Componentes

- **Cabecalho**: exibe foto, nome, curso e links; o LinkedIn aparece somente se informado.
- **Painel**: contêiner de seção que recebe título e conteúdo via `children`.
- **ListaHabilidades**: renderiza as habilidades com `.map()` e exibe o nível de cada uma.
- **CardProjeto**: card de projeto com selo condicional "em andamento" e link exibido apenas quando existe.
- **Contato**: links de e-mail (`mailto:`) e GitHub.
- **Rodape**: exibe o ano atual, calculado em tempo de execução, e o nome do autor.

## Autor

Breno Goya — Análise e Desenvolvimento de Sistemas
