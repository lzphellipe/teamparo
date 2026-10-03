import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibilityService } from './core/services/accessibility.service';

@Component({
  selector: 'tp-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent {
  // Inicializa preferências de acessibilidade salvas (alto contraste / tamanho de fonte)
  private readonly a11y = inject(AccessibilityService);
  constructor() { this.a11y.restore(); }
}
