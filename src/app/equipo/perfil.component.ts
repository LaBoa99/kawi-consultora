import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../landing/sections/nav/nav.component';
import { FooterComponent } from '../landing/sections/footer/footer.component';
import { findCollaborator } from './team';

@Component({
  selector: 'app-perfil',
  imports: [RouterLink, NavComponent, FooterComponent],
  styleUrl: './equipo.scss',
  template: `
    <app-nav />
    <main class="equipo container-kawi">
      <a routerLink="/equipo" class="perfil-back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        Equipo
      </a>

      @if (person(); as p) {
        <header class="perfil-header">
          <span class="monogram monogram--lg" aria-hidden="true">{{ p.initials }}</span>
          <div>
            <h1 class="perfil-name">{{ p.name }}</h1>
            <p class="perfil-role">{{ p.role }}</p>
          </div>
        </header>

        <div class="perfil-bio">
          @for (paragraph of p.bio; track $index) {
            <p>{{ paragraph }}</p>
          }
        </div>

        @if (p.links; as links) {
          <ul class="perfil-links" role="list">
            @if (links.linkedin) {
              <li><a [href]="links.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
            }
            @if (links.github) {
              <li><a [href]="links.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
            }
            @if (links.web) {
              <li><a [href]="links.web" target="_blank" rel="noopener noreferrer">Sitio web ↗</a></li>
            }
          </ul>
        }

        <section class="perfil-projects" aria-labelledby="proyectos-title">
          <h2 id="proyectos-title" class="perfil-projects-title">Proyectos</h2>

          @for (project of p.projects; track project.title) {
            <article class="project">
              <div class="project-head">
                @if (project.context) {
                  <p class="project-context">{{ project.context }}</p>
                }
                <h3 class="project-title">{{ project.title }}</h3>
              </div>
              <div class="project-body">
                <p class="project-summary">{{ project.summary }}</p>
                @if (project.stack?.length) {
                  <p class="project-stack">
                    <span class="sr-only">Tecnologías: </span>{{ project.stack!.join(' · ') }}
                  </p>
                }
                @if (project.url) {
                  <a class="project-link" [href]="project.url" target="_blank" rel="noopener noreferrer">
                    Ver proyecto ↗
                  </a>
                }
              </div>
            </article>
          } @empty {
            <p class="perfil-empty">Todavía no hay proyectos publicados en este perfil.</p>
          }
        </section>

        <aside class="perfil-cta">
          <p class="perfil-cta-text">¿Tienes un proyecto parecido en mente?</p>
          <a class="btn-kawi btn-kawi--primary" href="https://wa.me/523319146420"
             target="_blank" rel="noopener noreferrer">
            Hablar con KAWI
          </a>
        </aside>
      } @else {
        <header class="perfil-header perfil-header--missing">
          <h1 class="perfil-name">No encontramos ese perfil</h1>
          <p class="perfil-role">Puede que el link esté mal escrito o que el perfil ya no exista.</p>
          <a routerLink="/equipo" class="btn-kawi btn-kawi--ghost">Ver todo el equipo</a>
        </header>
      }
    </main>
    <app-footer />
  `,
})
export class PerfilComponent {
  // Viene de la ruta /equipo/:slug (withComponentInputBinding).
  readonly slug = input<string>();
  readonly person = computed(() => findCollaborator(this.slug() ?? null));
}
