// src/app/shared/scroll-reveal.directive.ts
//
// Aplica una animación de reveal (opacity + translateY) cuando el elemento
// entra al viewport. Solo se dispara una vez. Respeta prefers-reduced-motion.

import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { animate, set } from 'animejs';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  // Delay en ms antes de animar (para escalonar elementos del mismo grupo)
  @Input() revealDelay = 0;
  // Distancia del desplazamiento inicial en px
  @Input() revealY = 24;

  private observer!: IntersectionObserver;
  private readonly reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;

    if (this.reducedMotion) return;

    // Estado inicial: invisible y desplazado
    set(el, { opacity: 0, translateY: this.revealY });

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          animate(el, {
            opacity:    [0, 1],
            translateY: [this.revealY, 0],
            duration:   640,
            delay:      this.revealDelay,
            easing:     'easeOutCubic',
          });

          this.observer.unobserve(el);
        });
      },
      { threshold: 0.12 },
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
