import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A11yBarComponent } from '../../../shared/components/a11y-bar/a11y-bar.component';
import { SiteHeaderComponent } from '../../../shared/components/site-header/site-header.component';
import { SiteFooterComponent } from '../../../shared/components/site-footer/site-footer.component';

@Component({
  selector: 'tp-site-layout',
  standalone: true,
  imports: [RouterOutlet, A11yBarComponent, SiteHeaderComponent, SiteFooterComponent],
  template: `
    <a class="tp-skip" href="#conteudo">Pular para o conteúdo</a>
    <tp-a11y-bar />
    <tp-site-header />
    <main id="conteudo">
      <router-outlet />
    </main>
    <tp-site-footer />
  `,
})
export class SiteLayoutComponent {}
