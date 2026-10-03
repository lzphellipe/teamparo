import { Component, inject } from '@angular/core';
import { AccessibilityService } from '../../../core/services/accessibility.service';

/** Barra superior com atalhos de acessibilidade. */
@Component({
  selector: 'tp-a11y-bar',
  standalone: true,
  template: `
    <div class="bar">
      <div class="tp-container inner">
        <span class="label">Acessibilidade</span>
        <button type="button" class="chip" (click)="a11y.cycleFontScale()"
                [attr.aria-pressed]="a11y.fontScaleIndex > 0">A+ Aumentar texto</button>
        <button type="button" class="chip" (click)="a11y.toggleContrast()"
                [attr.aria-pressed]="a11y.isHighContrast">◐ Alto contraste</button>
        <a class="chip" href="#" onclick="document.querySelector('[vw-access-button]')?.click(); return false;">VLibras</a>
      </div>
    </div>
  `,
  styles: [`
    .bar { background: var(--primary-strong); color: #fff; font-size: var(--text-sm); }
    .inner { display: flex; align-items: center; justify-content: flex-end; gap: .75rem; flex-wrap: wrap; padding-block: .5rem; }
    .label { margin-right: auto; opacity: .9; }
    .chip {
      background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,.5);
      padding: .35rem .8rem; border-radius: var(--radius-pill); cursor: pointer;
      font: inherit; font-size: var(--text-sm); text-decoration: none;
    }
    .chip:hover { background: rgba(255,255,255,.15); color: #fff; }
    .chip[aria-pressed="true"] { background: #fff; color: var(--primary-strong); font-weight: 700; }
    @media (max-width: 560px) { .label { display: none; } .inner { justify-content: center; } }
  `],
})
export class A11yBarComponent {
  readonly a11y = inject(AccessibilityService);
}
