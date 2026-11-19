export type Nivel = "básico" | "intermediário" | "avançado";

export type Habilidade = {
  id: number;
  nome: string;
  nivel: Nivel;
};

export type Projeto = {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  emAndamento: boolean;
  link?: string;
};

export type Perfil = {
  nome: string;
  curso: string;
  periodo: number;
  avatarUrl?: string;
  email: string;
  github: string;
  linkedin?: string;
};
