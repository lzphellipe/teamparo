import { Injectable } from '@angular/core';

/**
 * Controla preferências de acessibilidade que persistem entre visitas:
 *  - alto contraste (atributo data-contrast no <html>)
 *  - escala de fonte (variável --font-scale)
 */
@Injectable({ providedIn: 'root' })
export class AccessibilityService {
  private readonly KEY_CONTRAST = 'tp.contrast';
  private readonly KEY_FONT = 'tp.fontScale';
  private readonly scales = [1, 1.12, 1.25];

  private highContrast = false;
  private scaleIndex = 0;

  get isHighContrast(): boolean { return this.highContrast; }
  get fontScaleIndex(): number { return this.scaleIndex; }

  restore(): void {
    if (localStorage.getItem(this.KEY_CONTRAST) === 'high') this.setContrast(true);
    const saved = Number(localStorage.getItem(this.KEY_FONT));
    if (!Number.isNaN(saved) && saved > 0 && saved < this.scales.length) this.setFontScale(saved);
  }

  toggleContrast(): void { this.setContrast(!this.highContrast); }

  cycleFontScale(): void { this.setFontScale((this.scaleIndex + 1) % this.scales.length); }

  private setContrast(on: boolean): void {
    this.highContrast = on;
    const root = document.documentElement;
    if (on) root.setAttribute('data-contrast', 'high');
    else root.removeAttribute('data-contrast');
    localStorage.setItem(this.KEY_CONTRAST, on ? 'high' : 'normal');
  }

  private setFontScale(index: number): void {
    this.scaleIndex = index;
    document.documentElement.style.setProperty('--font-scale', String(this.scales[index]));
    localStorage.setItem(this.KEY_FONT, String(index));
  }
}
