// src/app/landing/landing.component.ts

import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavComponent } from './sections/nav/nav.component';
import { HeroComponent } from './sections/hero/hero.component';
import { CaseStudyComponent } from './sections/case-study/case-study.component';
import { ServicesComponent } from './sections/services/services.component';
import { ProcessComponent } from './sections/process/process.component';
import { CtaFinalComponent } from './sections/cta-final/cta-final.component';
import { FooterComponent } from './sections/footer/footer.component';
import { SlideNavComponent } from './slide-nav.component';

@Component({
  selector: 'app-landing',
  imports: [
    NavComponent,
    HeroComponent,
    CaseStudyComponent,
    ServicesComponent,
    ProcessComponent,
    CtaFinalComponent,
    FooterComponent,
    SlideNavComponent,
  ],
  template: `
    <app-nav />
    <main>
      <app-hero />
      <app-case-study />
      <app-services />
      <app-process />
      <app-cta-final />
    </main>
    <app-footer />
    <app-slide-nav />
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class LandingComponent implements OnInit, OnDestroy {
  // El snap por diapositivas solo aplica en la landing (ver .snap-slides en styles.scss)
  ngOnInit(): void {
    document.documentElement.classList.add('snap-slides');
  }

  ngOnDestroy(): void {
    document.documentElement.classList.remove('snap-slides');
  }
}
