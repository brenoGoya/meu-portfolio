import type { Habilidade, Perfil, Projeto } from "./types";

export const perfil: Perfil = {
  nome: "Breno Goya",
  curso: "Análise e Desenvolvimento de Sistemas",
  periodo: 2,
  email: "breno.goya@gmail.com",
  github: "https://github.com/brenoGoya",
};

export const habilidades: Habilidade[] = [
  {
    id: 1,
    nome: "Html e CSS",
    nivel: "intermediário",
  },
  {
    id: 2,
    nome: "Lógica de programação",
    nivel: "intermediário",
  },
  {
    id: 3,
    nome: "Estrutura de dados",
    nivel: "intermediário",
  },
  {
    id: 4,
    nome: "Javascript e Typscript",
    nivel: "intermediário",
  },
];

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Meu portfólio",
    descricao: "Página pessoal feita com React, Typescript e Tailwind.",
    tecnologias: ["React", "Typescript", "Tailwind"],
    emAndamento: true,
    link: "https://github.com/brenoGoya/meu-portfólio",
  },
];
