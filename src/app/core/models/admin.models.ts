export interface Evento {
  id: number;
  nome: string;
  data: string;       // ISO date
  local: string;
  inscritos: number;
  status: 'agendado' | 'realizado' | 'cancelado';
}

export interface Doacao {
  id: number;
  doador: string;
  valor: number;
  data: string;       // ISO date
  metodo: 'pix' | 'cartao' | 'boleto';
  recorrente: boolean;
}

export interface Voluntario {
  id: number;
  nome: string;
  area: string;
  desde: string;      // ISO date
  ativo: boolean;
}
