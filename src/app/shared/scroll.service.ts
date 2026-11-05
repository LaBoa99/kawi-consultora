import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { animate } from 'animejs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  private readonly router = inject(Router);

  // Para los links del nav y el footer: en la landing hace scroll;
  // desde otra página (/equipo) regresa a la landing y el router baja a la sección.
  go(id: string): void {
    if (document.getElementById(id)) {
      this.scrollTo(id);
    } else {
      this.router.navigate(['/'], { fragment: id });
    }
  }

  scrollTo(id: string): void {
    const target = document.getElementById(id);
    if (!target) return;

    const navHeight = document.querySelector('.nav')?.clientHeight ?? 72;
    const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight;

    if (this.reducedMotion) {
      window.scrollTo({ top: targetY });
      return;
    }

    const scroll = { y: window.scrollY };
    animate(scroll, {
      y: targetY,
      duration: 800,
      easing: 'easeInOutQuart',
      onUpdate: () => window.scrollTo(0, scroll.y),
    });
  }
}
