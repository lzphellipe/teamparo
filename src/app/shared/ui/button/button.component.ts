import { Component, Input } from '@angular/core';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light';

/**
 * Botão do design system. Renderiza <a> quando recebe [href],
 * caso contrário um <button>. Variações controladas por [variant].
 */
@Component({
  selector: 'tp-button',
  standalone: true,
  template: `
    @if (href) {
      <a [href]="href" class="tp-btn" [class]="cls"><ng-content /></a>
    } @else {
      <button [type]="type" class="tp-btn" [class]="cls"><ng-content /></button>
    }
  `,
})
export class ButtonComponent {
  @Input() variant: Variant = 'primary';
  @Input() href?: string;
  @Input() type: 'button' | 'submit' = 'button';
  get cls(): string { return 'tp-btn--' + this.variant; }
}
