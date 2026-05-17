// src/app/landing/landing.component.ts

import { Component } from '@angular/core';
import { NavComponent } from './sections/nav/nav.component';
import { HeroComponent } from './sections/hero/hero.component';
import { CaseStudyComponent } from './sections/case-study/case-study.component';
import { ServicesComponent } from './sections/services/services.component';
import { ProcessComponent } from './sections/process/process.component';
import { AboutGaelComponent } from './sections/about-gael/about-gael.component';
import { CtaFinalComponent } from './sections/cta-final/cta-final.component';

@Component({
  selector: 'app-landing',
  imports: [
    NavComponent,
    HeroComponent,
    CaseStudyComponent,
    ServicesComponent,
    ProcessComponent,
    AboutGaelComponent,
    CtaFinalComponent,
  ],
  template: `
    <app-nav />
    <main>
      <app-hero />
      <app-case-study />
      <app-services />
      <app-process />
      <app-about-gael />
      <app-cta-final />
    </main>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class LandingComponent {}
