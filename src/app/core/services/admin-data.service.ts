import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Doacao, Evento, Voluntario } from '../models/admin.models';

/**
 * Dados mockados da área administrativa.
 * Cada método já retorna Observable para facilitar a troca por HttpClient
 * apontando para a API Spring Boot (ex.: this.http.get<Evento[]>('/api/eventos')).
 */
@Injectable({ providedIn: 'root' })
export class AdminDataService {
  private readonly eventos: Evento[] = [
    { id: 1, nome: 'Roda de conversa: famílias atípicas', data: '2026-07-12', local: 'Sede TEAMPARO', inscritos: 28, status: 'agendado' },
    { id: 2, nome: 'Oficina de inclusão para educadores', data: '2026-06-05', local: 'Escola Municipal', inscritos: 41, status: 'realizado' },
    { id: 3, nome: 'Mutirão de orientação sobre direitos', data: '2026-08-20', local: 'Câmara Municipal', inscritos: 12, status: 'agendado' },
  ];

  private readonly doacoes: Doacao[] = [
    { id: 1, doador: 'Maria S.', valor: 50, data: '2026-06-18', metodo: 'pix', recorrente: true },
    { id: 2, doador: 'Anônimo', valor: 200, data: '2026-06-15', metodo: 'pix', recorrente: false },
    { id: 3, doador: 'Empresa Local', valor: 1000, data: '2026-06-10', metodo: 'boleto', recorrente: true },
    { id: 4, doador: 'João P.', valor: 30, data: '2026-06-08', metodo: 'cartao', recorrente: true },
  ];

  private readonly voluntarios: Voluntario[] = [
    { id: 1, nome: 'Ana Lima', area: 'Psicopedagogia', desde: '2023-03-01', ativo: true },
    { id: 2, nome: 'Carlos Reis', area: 'Comunicação', desde: '2024-09-15', ativo: true },
    { id: 3, nome: 'Beatriz N.', area: 'Eventos', desde: '2025-01-20', ativo: false },
  ];

  getEventos(): Observable<Evento[]> { return of(this.eventos); }
  getDoacoes(): Observable<Doacao[]> { return of(this.doacoes); }
  getVoluntarios(): Observable<Voluntario[]> { return of(this.voluntarios); }

  getResumo() {
    const totalDoado = this.doacoes.reduce((s, d) => s + d.valor, 0);
    return of({
      doadores: this.doacoes.length,
      totalDoado,
      recorrentes: this.doacoes.filter((d) => d.recorrente).length,
      voluntariosAtivos: this.voluntarios.filter((v) => v.ativo).length,
      eventosAgendados: this.eventos.filter((e) => e.status === 'agendado').length,
    });
  }
}
