export interface Program {
  tag: string;
  title: string;
  description: string;
}

export interface ResourceGroup {
  variant: 'familias' | 'neurodivergentes';
  title: string;
  intro: string;
  items: string[];
  cta: string;
}

export interface Sponsor {
  name: string;
  tier: 'mantenedor' | 'apoiador' | 'parceiro';
}

export interface TransparencyDoc {
  title: string;
  year: string;
  href: string;
}

export interface ImpactStat {
  value: string;
  label: string;
}
