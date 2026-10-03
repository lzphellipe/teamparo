import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { AdminDataService } from '../../../../core/services/admin-data.service';

@Component({
  selector: 'tp-dashboard',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe],
  template: `
    <h1 class="tp-page-title">Painel</h1>
    <p class="tp-page-sub">Visão geral da operação da TEAMPARO.</p>

    @if (resumo$ | async; as r) {
      <div class="tp-kpis">
        <div class="tp-kpi"><div class="v">{{ r.totalDoado | currency:'BRL':'symbol':'1.0-0' }}</div><div class="k">arrecadado no período</div></div>
        <div class="tp-kpi"><div class="v">{{ r.doadores }}</div><div class="k">doações registradas</div></div>
        <div class="tp-kpi"><div class="v">{{ r.recorrentes }}</div><div class="k">doadores recorrentes</div></div>
        <div class="tp-kpi"><div class="v">{{ r.voluntariosAtivos }}</div><div class="k">voluntários ativos</div></div>
        <div class="tp-kpi"><div class="v">{{ r.eventosAgendados }}</div><div class="k">eventos agendados</div></div>
      </div>
    }
  `,
})
export class DashboardComponent {
  private readonly data = inject(AdminDataService);
  readonly resumo$ = this.data.getResumo();
}
