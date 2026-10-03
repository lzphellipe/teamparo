import { Component, Input } from '@angular/core';

/** Cabeçalho de seção padronizado: kicker + título + subtítulo. */
@Component({
  selector: 'tp-section-heading',
  standalone: true,
  template: `
    <header class="head">
      @if (kicker) { <span class="tp-kicker">{{ kicker }}</span> }
      <h2 [id]="headingId">{{ title }}</h2>
      @if (subtitle) { <p class="tp-lead">{{ subtitle }}</p> }
    </header>
  `,
  styles: [`
    .head { max-width: 62ch; margin-bottom: var(--space-7); }
    h2 { font-size: var(--text-2xl); }
    @media (min-width: 900px) { h2 { font-size: var(--text-3xl); } }
    p { margin-top: var(--space-3); }
  `],
})
export class SectionHeadingComponent {
  @Input({ required: true }) title = '';
  @Input() kicker?: string;
  @Input() subtitle?: string;
  @Input() headingId?: string;
}
