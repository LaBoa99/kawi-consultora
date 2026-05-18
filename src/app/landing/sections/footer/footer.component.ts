import { Component, inject } from '@angular/core';
import { ScrollService } from '../../../shared/scroll.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly scroll = inject(ScrollService);
  readonly year = new Date().getFullYear();

  onAnchorClick(event: MouseEvent, targetId: string): void {
    event.preventDefault();
    this.scroll.scrollTo(targetId);
  }
}
