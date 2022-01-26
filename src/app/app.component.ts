import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sair', url: 'sair', icon: 'power'},
    { title: 'Créditos', url: 'blank', icon: 'information-circle'},
    { title: 'Salvar', url: 'salvar', icon: 'save'},
    { title: 'Configurações', url: 'configuracoes', icon: 'construct'},
    { title: 'Loja', url: 'blank', icon: 'cart'},
    { title: 'Meus Cookies', url: 'blank', icon: 'sparkles'},
    { title: 'Meu Perfil', url: 'blank', icon: 'person-circle'},
  ];
  constructor( ) {}

  
}
