// src/app/landing/sections/hero/hero.component.ts

import { Component, inject } from '@angular/core';
import { ScrollService } from '../../../shared/scroll.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly scroll = inject(ScrollService);

  onAnchorClick(event: MouseEvent, targetId: string): void {
    event.preventDefault();
    this.scroll.scrollTo(targetId);
  }
}
