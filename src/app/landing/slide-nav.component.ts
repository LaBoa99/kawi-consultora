// src/app/landing/slide-nav.component.ts
// Control lateral de diapositivas: muestra en cuál vas y permite saltar a cualquiera.

import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';

interface Slide {
  label: string;
  el: HTMLElement;
}

@Component({
  selector: 'app-slide-nav',
  template: `
    <nav class="slide-nav" aria-label="Diapositivas">
      <ol role="list">
        @for (slide of slides(); track $index) {
          <li>
            <button
              type="button"
              class="slide-nav-dot"
              [class.slide-nav-dot--active]="active() === $index"
              [attr.aria-current]="active() === $index ? 'step' : null"
              (click)="go(slide)"
            >
              <span class="slide-nav-label">{{ slide.label }}</span>
            </button>
          </li>
        }
      </ol>
    </nav>
  `,
  styleUrl: './slide-nav.component.scss',
})
export class SlideNavComponent implements AfterViewInit, OnDestroy {
  readonly slides = signal<Slide[]>([]);
  readonly active = signal(0);
  private observer?: IntersectionObserver;
  private readonly reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  ngAfterViewInit(): void {
    const els = [...document.querySelectorAll<HTMLElement>('.slide[data-slide]')];
    this.slides.set(els.map((el) => ({ label: el.dataset['slide'] ?? '', el })));

    // La diapositiva activa es la que ocupa la franja central de la pantalla
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) this.active.set(els.indexOf(e.target as HTMLElement));
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    els.forEach((el) => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  go(slide: Slide): void {
    slide.el.scrollIntoView({ behavior: this.reducedMotion ? 'auto' : 'smooth' });
  }
}
