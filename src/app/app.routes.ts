import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'BABYMONS7ER — The Seven AI Guardians',
    loadComponent: () =>
      import('./pages/overview/overview').then((m) => m.OverviewPage),
  },
  {
    path: 'guardians',
    title: 'The Seven AI Guardians — BABYMONS7ER',
    loadComponent: () =>
      import('./pages/guardians/guardians').then((m) => m.GuardiansPage),
  },
  {
    path: 'architecture',
    title: 'Architecture & SysCore — BABYMONS7ER',
    loadComponent: () =>
      import('./pages/architecture/architecture').then((m) => m.ArchitecturePage),
  },
  {
    path: 'chronicle',
    title: 'Chronicle & Lore — BABYMONS7ER',
    loadComponent: () =>
      import('./pages/chronicle/chronicle').then((m) => m.ChroniclePage),
  },
  {
    path: 'summon',
    title: 'Summon Guardians — BABYMONS7ER',
    loadComponent: () =>
      import('./pages/summon/summon').then((m) => m.SummonPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
