// src/app/landing/sections/case-study/case-study.component.ts

import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/scroll-reveal.directive';
import { CountUpDirective } from '../../../shared/count-up.directive';

@Component({
  selector: 'app-case-study',
  imports: [ScrollRevealDirective, CountUpDirective],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss',
})
export class CaseStudyComponent {}
