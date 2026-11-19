import type { Habilidade, Perfil, Projeto } from "./types";

export const perfil: Perfil = {
  nome: "Breno Goya",
  curso: "Análise e Desenvolvimento de Sistemas",
  periodo: 2,
  email: "breno.goya@gmail.com",
  github: "https://github.com/brenoGoya",
  avatarUrl: "https://github.com/brenoGoya.png",
};

export const habilidades: Habilidade[] = [
  {
    id: 1,
    nome: "HTML e CSS",
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
    nivel: "básico",
  },
  {
    id: 4,
    nome: "JavaScript e TypeScript",
    nivel: "intermediário",
  },
];

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Meu portfólio",
    descricao: "Página pessoal feita com React, TypeScript e Tailwind.",
    tecnologias: ["React", "TypeScript", "Tailwind"],
    emAndamento: true,
    link: "https://github.com/brenoGoya/meu-portfolio",
  },
  {
    id: 2,
    titulo: "Controle de gastos pessoais",
    descricao: "Em construção.",
    tecnologias: ["React", "TypeScript", "Tailwind"],
    emAndamento: true,
  },
];
