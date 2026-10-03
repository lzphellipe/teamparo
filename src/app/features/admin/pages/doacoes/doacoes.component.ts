import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { AdminDataService } from '../../../../core/services/admin-data.service';

@Component({
  selector: 'tp-doacoes',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, DatePipe],
  template: `
    <h1 class="tp-page-title">Doações</h1>
    <p class="tp-page-sub">Contribuições recebidas.</p>

    <div class="tp-table-wrap">
      <table class="tp-table">
        <thead><tr><th>Doador</th><th>Valor</th><th>Data</th><th>Método</th><th>Tipo</th></tr></thead>
        <tbody>
          @for (d of doacoes$ | async; track d.id) {
            <tr>
              <td>{{ d.doador }}</td>
              <td>{{ d.valor | currency:'BRL':'symbol':'1.2-2' }}</td>
              <td>{{ d.data | date:'dd/MM/yyyy' }}</td>
              <td style="text-transform:capitalize">{{ d.metodo }}</td>
              <td><span class="tp-badge" [class.tp-badge--ok]="d.recorrente" [class.tp-badge--off]="!d.recorrente">{{ d.recorrente ? 'recorrente' : 'única' }}</span></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class DoacoesComponent {
  private readonly data = inject(AdminDataService);
  readonly doacoes$ = this.data.getDoacoes();
}
