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

    this.observer.observe(this.el.nativeElement);
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
