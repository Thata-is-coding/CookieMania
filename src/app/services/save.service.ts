import { ConquistaService } from './conquista.service';
import { Injectable } from '@angular/core';
import { saveConfig } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  constructor( public conquistaService: ConquistaService ) { }
  salvar (){
    let save = {
      idUsuario: JSON.parse(localStorage.getItem('usuarioLogado')),
      setting: JSON.parse(localStorage.getItem('tbsetting')),
      conquistas: JSON.parse(localStorage.getItem('tbConquistas')),
      pontos: JSON.parse(localStorage.getItem('pontos')),
      cookies: JSON.parse(localStorage.getItem('arrayCookies')),
    }; 

    let saves = JSON.parse(localStorage.getItem('tbSaves'));

    let userId = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (this.buscarSavePorId(userId).idUsuario == null){
      this.conquistaService.atualizar(5);
    }

    saves.push(save);
    localStorage.setItem('tbSaves', JSON.stringify(saves));
  }

  buscarSavePorId (id: number){
    let saves= JSON.parse(localStorage.getItem('tbSaves'));
    let save = {
      idUsuario: null,
      setting:  null,
      conquistas: null,
      pontos: null,
      cookies: [],
    };

    /* retorna o save mais recente, ou seja, ultimo no array */
    if (saves){
      for (let i = 0; i<saves.length; i++){
        if (saves[i].idUsuario == id){
          save= saves[i];
        }
      }
    }
    
    return save;
  }

  listar(){
    let saves= JSON.parse(localStorage.getItem('tbSaves'));
    if(!saves){
      saves=[];
      localStorage.setItem('tbSaves', JSON.stringify(saves));
    }
    return saves;
  }
}