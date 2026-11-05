// Reproduce un <video> solo mientras está a la vista y lo pausa al salir.
// Con prefers-reduced-motion no lo reproduce: se queda el poster.

import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({ selector: 'video[autoplayInView]' })
export class AutoplayInViewDirective implements OnInit, OnDestroy {
  private readonly video = inject<ElementRef<HTMLVideoElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.video.play().catch(() => {}); // el navegador puede bloquearlo; queda el poster
        } else {
          this.video.pause();
        }
      },
      { threshold: 0.5 },
    );
    this.observer.observe(this.video);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
