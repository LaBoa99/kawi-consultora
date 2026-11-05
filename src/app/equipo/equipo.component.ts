import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../landing/sections/nav/nav.component';
import { FooterComponent } from '../landing/sections/footer/footer.component';
import { TEAM } from './team';

@Component({
  selector: 'app-equipo',
  imports: [RouterLink, NavComponent, FooterComponent],
  styleUrl: './equipo.scss',
  template: `
    <app-nav />
    <main class="equipo container-kawi">
      <header class="equipo-header">
        <h1 class="equipo-title">El equipo</h1>
        <p class="equipo-intro">
          KAWI lo llevo yo. Cuando un proyecto lo pide, sumo a gente que conozco y en quien confío.
          Aquí está el trabajo de cada quien.
        </p>
      </header>

      <ul class="team-list" role="list">
        @for (person of team; track person.slug) {
          <li>
            <a class="team-row" [routerLink]="['/equipo', person.slug]">
              <span class="monogram" aria-hidden="true">{{ person.initials }}</span>
              <span class="team-row-text">
                <span class="team-row-name">{{ person.name }}</span>
                <span class="team-row-role">{{ person.role }}</span>
              </span>
              <span class="team-row-count">
                @switch (person.projects.length) {
                  @case (0) { Perfil }
                  @case (1) { 1 proyecto }
                  @default { {{ person.projects.length }} proyectos }
                }
              </span>
              <svg class="team-row-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"
                   aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </li>
        }
      </ul>
    </main>
    <app-footer />
  `,
})
export class EquipoComponent {
  readonly team = TEAM;
}
