import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { AdminDataService } from '../../../../core/services/admin-data.service';

@Component({
  selector: 'tp-eventos',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  template: `
    <h1 class="tp-page-title">Eventos</h1>
    <p class="tp-page-sub">Agenda de ações e atividades da ONG.</p>

    <div class="tp-table-wrap">
      <table class="tp-table">
        <thead><tr><th>Evento</th><th>Data</th><th>Local</th><th>Inscritos</th><th>Status</th></tr></thead>
        <tbody>
          @for (e of eventos$ | async; track e.id) {
            <tr>
              <td>{{ e.nome }}</td>
              <td>{{ e.data | date:'dd/MM/yyyy' }}</td>
              <td>{{ e.local }}</td>
              <td>{{ e.inscritos }}</td>
              <td>
                <span class="tp-badge"
                  [class.tp-badge--ok]="e.status === 'realizado'"
                  [class.tp-badge--warn]="e.status === 'agendado'"
                  [class.tp-badge--off]="e.status === 'cancelado'">{{ e.status }}</span>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class EventosComponent {
  private readonly data = inject(AdminDataService);
  readonly eventos$ = this.data.getEventos();
}
