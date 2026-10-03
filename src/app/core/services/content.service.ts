import { Injectable } from '@angular/core';
import { ImpactStat, Program, ResourceGroup, Sponsor, TransparencyDoc } from '../models/content.models';

/**
 * Fonte única do conteúdo institucional.
 * TODO: substituir pelos dados oficiais da ONG (ou consumir do back-end Spring Boot).
 */
@Injectable({ providedIn: 'root' })
export class ContentService {
  readonly pixKey = '58.150.740/0001-94'; // TODO: confirmar a chave/CNPJ real da TEAMPARO

  readonly impact: ImpactStat[] = [
    { value: '320+', label: 'famílias acompanhadas' },
    { value: '45', label: 'voluntários ativos' },
    { value: '12', label: 'escolas parceiras' },
    { value: '6', label: 'anos de atuação' },
  ];

  readonly programs: Program[] = [
    { tag: 'Acolhimento', title: 'Orientação a famílias', description: 'Escuta qualificada, informação confiável e encaminhamento para diagnóstico e atendimentos na rede.' },
    { tag: 'Comunidade', title: 'Grupos de apoio', description: 'Encontros regulares para famílias e pessoas neurodivergentes trocarem experiências e se fortalecerem.' },
    { tag: 'Educação', title: 'Inclusão escolar', description: 'Capacitação de educadores e apoio a escolas para construírem ambientes verdadeiramente inclusivos.' },
    { tag: 'Trabalho', title: 'Inclusão no mercado', description: 'Sensibilização de empresas e preparação para ambientes de trabalho neuroinclusivos.' },
    { tag: 'Desenvolvimento', title: 'Atividades socioemocionais', description: 'Oficinas que estimulam comunicação, habilidades sociais e bem-estar, respeitando o ritmo de cada pessoa.' },
    { tag: 'Direitos', title: 'Defesa de direitos', description: 'Orientação sobre a legislação (LBI, Lei 12.764/2012) e advocacy por políticas públicas inclusivas.' },
  ];

  readonly resources: ResourceGroup[] = [
    {
      variant: 'familias',
      title: 'Para famílias',
      intro: 'Diante de um diagnóstico ou dos primeiros sinais, surgem muitas dúvidas. Estamos aqui para os primeiros passos.',
      items: ['Como buscar avaliação e diagnóstico', 'Direitos garantidos por lei e como exercê-los', 'Onde encontrar terapias e atendimento na rede', 'Como apoiar sem se sobrecarregar'],
      cta: 'Acessar guias para famílias',
    },
    {
      variant: 'neurodivergentes',
      title: 'Para pessoas neurodivergentes',
      intro: 'Informação que respeita quem você é, com foco em autoconhecimento, autonomia e pertencimento.',
      items: ['Autoconhecimento e identidade neurodivergente', 'Seus direitos no trabalho e nos estudos', 'Estratégias de autorregulação e bem-estar', 'Comunidade e espaços de troca'],
      cta: 'Acessar conteúdo',
    },
  ];

  readonly transparency: TransparencyDoc[] = [
    { title: 'Relatório anual de atividades', year: '2025', href: '#' },
    { title: 'Demonstrativo financeiro', year: '2025', href: '#' },
    { title: 'Estatuto social', year: 'Vigente', href: '#' },
  ];

  readonly sponsors: Sponsor[] = [
    { name: 'Empresa Mantenedora', tier: 'mantenedor' },
    { name: 'Comércio Local', tier: 'apoiador' },
    { name: 'Clínica Parceira', tier: 'parceiro' },
    { name: 'Escola Parceira', tier: 'parceiro' },
  ];
}
