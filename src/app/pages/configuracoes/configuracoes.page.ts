import { Component, OnInit } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
config:any;
musica:number;
efeito:number;
luz:number;

  constructor() { }

  ngOnInit() {
    this.config = JSON.parse(localStorage.getItem('tbsetting'));
    if(this.config){
      this.musica= this.config.musica;
      this.efeito= this.config.efeito;
      this.luz= this.config.luz;
    }
  }
  async salvar(){
    let settings= {musica:this.musica, efeito: this.efeito, luz:this.luz}
    localStorage.setItem('tbsetting', JSON.stringify(settings));
  }

}
