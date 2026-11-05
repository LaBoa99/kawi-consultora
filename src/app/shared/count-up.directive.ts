import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { animate } from 'animejs';

@Directive({
  selector: '[countUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input() countTo       = 0;
  @Input() countPrefix   = '';
  @Input() countSuffix   = '';
  @Input() countSeparator = false;
  @Input() countDuration = 1400;
  @Input() countDelay    = 0;

  private observer!: IntersectionObserver;
  private readonly reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if (this.reducedMotion) return;

    const el = this.el.nativeElement;

    // Reserva el ancho del valor final antes de animar para evitar layout shifts.
    // El elemento ya muestra el valor final en el HTML, así que capturamos
    // ese ancho y lo fijamos como min-width antes de que el contador empiece en 0.
    const finalWidth = el.offsetWidth;
    if (finalWidth > 0) {
      el.style.display = 'inline-block';
      el.style.minWidth = `${finalWidth}px`;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          this.startCount();
          this.observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 },
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private startCount(): void {
    const counter = { value: 0 };
    animate(counter, {
      value: this.countTo,
      duration: this.countDuration,
      delay: this.countDelay,
      easing: 'easeOutQuart',
      onUpdate: () => {
        this.el.nativeElement.textContent = this.format(Math.round(counter.value));
      },
    });
  }

  private format(n: number): string {
    const str = this.countSeparator ? n.toLocaleString('en-US') : String(n);
    return `${this.countPrefix}${str}${this.countSuffix}`;
  }
}
