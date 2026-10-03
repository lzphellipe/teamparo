import { Component, OnInit, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { SectionHeadingComponent } from '../../../shared/ui/section-heading/section-heading.component';
import { ContentService } from '../../../core/services/content.service';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'tp-home',
  standalone: true,
  imports: [ButtonComponent, SectionHeadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  readonly content = inject(ContentService);
  private readonly seo = inject(SeoService);

  readonly pixCopied = signal(false);

  ngOnInit(): void {
    this.seo.update({
      title: 'TEAMPARO — Inclusão e amparo à neurodiversidade',
      description: 'Acolhemos pessoas autistas e com outras neurodivergências e suas famílias. Conheça, doe ou seja voluntário.',
    });
  }

  async copyPix(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.content.pixKey);
      this.pixCopied.set(true);
      setTimeout(() => this.pixCopied.set(false), 2500);
    } catch {
      this.pixCopied.set(false);
    }
  }
}
