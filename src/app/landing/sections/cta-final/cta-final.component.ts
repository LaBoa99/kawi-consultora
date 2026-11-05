// src/app/landing/sections/cta-final/cta-final.component.ts

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-cta-final',
  imports: [ScrollRevealDirective, RouterLink],
  templateUrl: './cta-final.component.html',
  styleUrl: './cta-final.component.scss',
})
export class CtaFinalComponent {}
