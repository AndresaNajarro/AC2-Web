import { Component } from '@angular/core';
import { InscricaoService } from '../inscricao';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastrar-inscricao',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './cadastrar-inscricao.html',
  styleUrl: './cadastrar-inscricao.css'
})
export class CadastrarInscricaoComponent {
  nome: string = '';
  email: string = '';
  oficinaSelecionada: string = ''; 
  oficinasDisponiveis: string[] = ['Angular Básico', 'Java para Web', 'Python e Dados'];

  constructor(private inscricaoService: InscricaoService) {}

  cadastrar() {
    if (this.nome && this.email && this.oficinaSelecionada) {
      this.inscricaoService.adicionar(this.nome, this.email, this.oficinaSelecionada);
      alert('Inscrição realizada!');
      this.nome = '';
      this.email = '';
      this.oficinaSelecionada = '';
    } else {
      alert('Preencha todos os campos!');
    }
  }
}