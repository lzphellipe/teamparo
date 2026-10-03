import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { AdminDataService } from '../../../../core/services/admin-data.service';

@Component({
  selector: 'tp-voluntarios',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  template: `
    <h1 class="tp-page-title">Voluntários</h1>
    <p class="tp-page-sub">Pessoas que doam tempo e talento à TEAMPARO.</p>

    <div class="tp-table-wrap">
      <table class="tp-table">
        <thead><tr><th>Nome</th><th>Área</th><th>Desde</th><th>Situação</th></tr></thead>
        <tbody>
          @for (v of voluntarios$ | async; track v.id) {
            <tr>
              <td>{{ v.nome }}</td>
              <td>{{ v.area }}</td>
              <td>{{ v.desde | date:'MM/yyyy' }}</td>
              <td><span class="tp-badge" [class.tp-badge--ok]="v.ativo" [class.tp-badge--off]="!v.ativo">{{ v.ativo ? 'ativo' : 'inativo' }}</span></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class VoluntariosComponent {
  private readonly data = inject(AdminDataService);
  readonly voluntarios$ = this.data.getVoluntarios();
}
