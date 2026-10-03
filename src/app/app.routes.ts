import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/site/site-layout/site-layout.component').then((m) => m.SiteLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/site/home/home.component').then((m) => m.HomeComponent),
        title: 'TEAMPARO — Inclusão e amparo à neurodiversidade',
      },
    ],
  },
  {
    // Área administrativa (esqueleto pronto para integrar ao back-end Spring Boot)
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin-layout/admin-layout.component').then((m) => m.AdminLayoutComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/admin/pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
        title: 'Painel — TEAMPARO',
      },
      {
        path: 'eventos',
        loadComponent: () => import('./features/admin/pages/eventos/eventos.component').then((m) => m.EventosComponent),
        title: 'Eventos — TEAMPARO',
      },
      {
        path: 'doacoes',
        loadComponent: () => import('./features/admin/pages/doacoes/doacoes.component').then((m) => m.DoacoesComponent),
        title: 'Doações — TEAMPARO',
      },
      {
        path: 'voluntarios',
        loadComponent: () => import('./features/admin/pages/voluntarios/voluntarios.component').then((m) => m.VoluntariosComponent),
        title: 'Voluntários — TEAMPARO',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
