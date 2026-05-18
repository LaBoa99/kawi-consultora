// src/app/landing/sections/nav/nav.component.ts

import { Component, inject, signal, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ScrollService } from '../../../shared/scroll.service';

const NAV_SECTIONS = ['servicios', 'casos', 'proceso', 'sobre', 'contacto'];

@Component({
  selector: 'app-nav',
  imports: [RouterLink, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit, OnDestroy {
  readonly menuOpen      = signal(false);
  readonly activeSection = signal('');
  readonly scrolled      = signal(false);
  private readonly scroll = inject(ScrollService);
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );

    for (const id of NAV_SECTIONS) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  onNavClick(event: MouseEvent, targetId: string): void {
    event.preventDefault();
    this.closeMenu();
    this.scroll.scrollTo(targetId);
  }

  isActive(id: string): boolean {
    return this.activeSection() === id;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if ((event.target as Window).innerWidth >= 768) {
      this.menuOpen.set(false);
    }
  }
}
