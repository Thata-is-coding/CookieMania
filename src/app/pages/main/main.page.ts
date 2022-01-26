import { ConquistaService } from './../../services/conquista.service';
import { SaveService } from './../../services/save.service';
import { UserService } from './../../services/user.service';
import { CookieService } from './../../services/cookie.service';

import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  saves: any [];
  save = {
    idUsuario: null,
    setting:  null,
    conquistas: null,
    pontos: null,
    cookies: [],
  };

  pontos: number
  conquistas: any [];
  conquista = {
    id: null,
    nome: null,
    desc: null,
    status: null,
  }
  setting: null;

  cookies: any[];
  cookie = {
    id: null,
    nome: null,
    multiplicador: null,
    descricao: null
  }

  constructor( public navController: NavController, public cookieService: CookieService, 
    public userService: UserService, public saveService: SaveService, public conquistaService: ConquistaService) { }

  ngOnInit() {
    this.conquistaService.criarConquistas();

    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    let saves = JSON.parse(localStorage.getItem('tbSaves'));

    if (!usuarioLogado){
      this.navController.navigateBack('/login-user');
    }

    if (this.saveService.listar() === 0){
      let saves = [];
      localStorage.setItem('tbSaves', JSON.stringify(saves));
    }else{
      this.baixarSave();
    }

  this.carregarVars(); 
  }

  clicarCookie (){
    let pontosAntigo = this.pontos;
    this.pontos = this.pontos +  (1*this.cookie.multiplicador);
    localStorage.setItem('pontos', JSON.stringify(this.pontos));

    if (this.pontos >= 1000 && pontosAntigo< 1000){
      this.conquistaService.atualizar(3);
    }else{
      if (this.pontos >= 100 && pontosAntigo< 100){
        this.conquistaService.atualizar(2);
      }else{
        if (this.pontos >= 1 && pontosAntigo< 1){
          this.conquistaService.atualizar(1);
        }
      }
    } 
  }

  async baixarSave(){
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
    this.save = this.saveService.buscarSavePorId(usuarioLogado);

    this.pontos = this.save.pontos;
    localStorage.setItem('pontos', JSON.stringify(this.pontos));

    this.cookies = this.save.cookies;
    localStorage.setItem('arrayCookies', JSON.stringify(this.cookies));

    this.setting = this.save.setting;
    localStorage.setItem('tbsetting', JSON.stringify(this.setting));

    this.conquistas = this.save.conquistas;
    localStorage.setItem('tbConquistas', JSON.stringify(this.conquistas));
  }

  async carregarVars(){
    
    if(this.cookieService.listar().length === 0){
      this.cookie.nome = "Negreskito";
      this.cookie.multiplicador = 1;
      this.cookie.descricao = "Um cookie simples, de chocolate com recheio de baunilha.";
      
      this.cookieService.salvar(this.cookie);
    };

    

    if(this.conquistaService.listar().length === 0){      
      this.conquistaService.criarConquistas();
    };
    
    if (JSON.parse(localStorage.getItem('cookieAtivo')) == null){
      this.cookie = this.cookieService.listar()[0]
      localStorage.setItem('cookieAtivo', JSON.stringify(this.cookie));
    }else{
      this.cookie = JSON.parse(localStorage.getItem('cookieAtivo'));
    }

    let pontos = JSON.parse(localStorage.getItem('pontos'));
    if (pontos!= null){
      this.pontos = pontos;
    }else{
      this.pontos = 0;
    }
  }
}
