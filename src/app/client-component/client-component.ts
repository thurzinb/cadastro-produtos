import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Cliente {
  nome: string;
  email: string;
  telefone: string;
  genero: string;
  estado: string;
  interesses: { [key: string]: boolean };
  aceitaTermos: boolean;
}

@Component({
  selector: 'app-client-component',
  standalone: false,
  templateUrl: './client-component.html',
  styleUrls: ['./client-component.css']
})
export class ClientComponent {

  cliente: Cliente = {
    nome: '',
    email: '',
    telefone: '',
    genero: '',
    estado: '',
    interesses: {
      tecnologia: false,
      esportes: false,
      musica: false,
      viagens: false,
      gastronomia: false
    },
    aceitaTermos: false
  };

  estados: string[] = [
    'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES',
    'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE',
    'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC',
    'SE', 'SP', 'TO'
  ];

  mensagemSucesso: string = '';
  erros: string[] = [];
  cadastrado: boolean = false;

  get interessesSelecionados(): string[] {
    return Object.entries(this.cliente.interesses)
      .filter(([_, v]) => v)
      .map(([k]) => k.charAt(0).toUpperCase() + k.slice(1));
  }

  validar(): boolean {
    this.erros = [];

    if (!this.cliente.nome.trim())
      this.erros.push('Nome completo é obrigatório.');
    if (!this.cliente.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      this.erros.push('E-mail inválido.');
    if (!this.cliente.telefone.match(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/))
      this.erros.push('Telefone inválido.');
    if (!this.cliente.genero)
      this.erros.push('Selecione o gênero.');
    if (!this.cliente.estado)
      this.erros.push('Selecione o estado.');
    if (!Object.values(this.cliente.interesses).some(v => v))
      this.erros.push('Selecione ao menos um interesse.');
    if (!this.cliente.aceitaTermos)
      this.erros.push('Você deve aceitar os termos de uso.');

    return this.erros.length === 0;
  }

  cadastrar(): void {
    if (this.validar()) {
      this.mensagemSucesso = `Cliente ${this.cliente.nome} cadastrado com sucesso!`;
      this.cadastrado = true;
    }
  }

  novoCadastro(): void {
    this.cliente = {
      nome: '',
      email: '',
      telefone: '',
      genero: '',
      estado: '',
      interesses: {
        tecnologia: false,
        esportes: false,
        musica: false,
        viagens: false,
        gastronomia: false
      },
      aceitaTermos: false
    };
    this.mensagemSucesso = '';
    this.erros = [];
    this.cadastrado = false;
  }
}