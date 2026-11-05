// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { findCollaborator } from './equipo/team';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    title: 'KAWI · Software a medida para PyMEs en Tala',
  },
  {
    path: 'equipo',
    loadComponent: () => import('./equipo/equipo.component').then((m) => m.EquipoComponent),
    title: 'Equipo · KAWI',
  },
  {
    path: 'equipo/:slug',
    loadComponent: () => import('./equipo/perfil.component').then((m) => m.PerfilComponent),
    title: (route) => `${findCollaborator(route.paramMap.get('slug'))?.name ?? 'Perfil'} · KAWI`,
  },
  { path: '**', redirectTo: '' },
];
