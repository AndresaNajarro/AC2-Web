import { Routes } from '@angular/router';
import { CadastrarInscricaoComponent } from './cadastrar-inscricao/cadastrar-inscricao';
import { ListaInscricoesComponent } from './lista-inscricoes/lista-inscricoes';

export const routes: Routes = [
    { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
    { path: 'cadastrar', component: CadastrarInscricaoComponent },
    { path: 'lista', component: ListaInscricoesComponent }
];

