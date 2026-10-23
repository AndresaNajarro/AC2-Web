import { Injectable } from '@angular/core';

export interface Inscricao {
  id: number;
  nome: string;
  email: string;
  oficina: string;
  status: 'Pendente' | 'Confirmada'; 
}

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {
  private listaInscricoes: Inscricao[] = [];
  private proximoId: number = 1;

  listar(): Inscricao[] {
    return this.listaInscricoes;
  }

  adicionar(nome: string, email: string, oficina: string): void {
    const novaInscricao: Inscricao = {
      id: this.proximoId++,
      nome: nome,
      email: email,
      oficina: oficina,
      status: 'Pendente' 
    };
    this.listaInscricoes.push(novaInscricao);
  }

  remover(id: number): void {
    this.listaInscricoes = this.listaInscricoes.filter(inscricao => inscricao.id !== id);
  }

  confirmarInscricao(id: number): void {
    const inscricaoEncontrada = this.listaInscricoes.find(inscricao => inscricao.id === id);
    if (inscricaoEncontrada) {
      inscricaoEncontrada.status = 'Confirmada';
    }
  }

  total(): number { return this.listaInscricoes.length; }
  confirmadas(): number { return this.listaInscricoes.filter(i => i.status === 'Confirmada').length; }
  pendentes(): number { return this.listaInscricoes.filter(i => i.status === 'Pendente').length; }
}