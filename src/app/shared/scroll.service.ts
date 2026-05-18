import { Injectable } from '@angular/core';
import { animate } from 'animejs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
