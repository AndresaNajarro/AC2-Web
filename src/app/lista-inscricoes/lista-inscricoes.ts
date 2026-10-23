import { Component, OnInit } from '@angular/core';
import { Inscricao, InscricaoService } from '../inscricao';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-inscricoes',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './lista-inscricoes.html',
  styleUrl: './lista-inscricoes.css'
})
export class ListaInscricoesComponent implements OnInit {
  inscricoes: Inscricao[] = []; 

  constructor(private inscricaoService: InscricaoService) {}

  ngOnInit() {
    this.inscricoes = this.inscricaoService.listar();
  }

  remover(id: number) {
    this.inscricaoService.remover(id);
    this.inscricoes = this.inscricaoService.listar();
  }

  confirmar(id: number) {
    this.inscricaoService.confirmarInscricao(id);
    this.inscricoes = this.inscricaoService.listar();
  }

  get total() { return this.inscricaoService.total(); }
  get confirmadas() { return this.inscricaoService.confirmadas(); }
  get pendentes() { return this.inscricaoService.pendentes(); }
}