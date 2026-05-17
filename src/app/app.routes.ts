// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    title: 'KAWI · Software a medida para PyMEs en Tala',
  },
];
