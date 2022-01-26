import { ToastController } from '@ionic/angular';
import { CookieService } from './cookie.service';
import { SaveService } from './save.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConquistaService {
  conquistas: any [];
  conquista = {
    id: null,
    nome: null,
    desc: null,
    status: null,
  }

  constructor (public toastController: ToastController) { }

  atualizar (id: number){
    let conquistas= JSON.parse(localStorage.getItem('tbConquistas'));
    let posicao = conquistas.findIndex(u => u.id == id);
    conquistas[posicao].status= "trophy";

    localStorage.setItem('tbConquistas', JSON.stringify(conquistas));
    this.alerta();
  }

  listar(){
    let conquistas= JSON.parse(localStorage.getItem('tbConquistas'));
    if (!conquistas){
      conquistas = [];
      localStorage.setItem('tbConquistas', JSON.stringify(conquistas));
    }    
    return conquistas;
  }

  /* funcao para evitar erro com as conquistas */
  criarConquistas( ){
    let conquistas  = [
      { id: 0, nome: 'O começo de tudo', desc: 'Clicou pela primeira vez', status: "lock-closed" },
      { id: 1, nome: 'Achou!', desc: 'Abriu a página de achievements pela primeira vez', status: "lock-closed" },
      { id: 2, nome: 'No caminho certo', desc: 'Conseguiu 100 pontos', status: "lock-closed" },
      { id: 3, nome: 'Chamanando os amigos', desc: 'Conseguiu seu segundo cookie', status: "lock-closed" },
      { id: 4, nome: 'Praticamente profissional', desc: 'Conseguiu 1000 pontos', status: "lock-closed" },
      { id: 5, nome: 'Para mais tarde', desc: 'Salvou pela primeira vez', status: "lock-closed" }
    ];

    localStorage.setItem('tbConquistas', JSON.stringify(conquistas));
  }

  verificarConquistas( conquistas ){
    let pontos = JSON.parse(localStorage.getItem('pontos'));
    let saves = JSON.parse(localStorage.getItem('tbSaves'));
    let cookies = JSON.parse(localStorage.getItem('cookies'));
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (pontos){
      if (pontos >= 1){
        conquistas[0].status = "trophy";
      }
      if (pontos >= 100){
        conquistas[2].status = "trophy";
      }
      if (pontos >= 1000){
        conquistas[4].status = "trophy";
      }
    }
    
    if (cookies){
      if (cookies.length >= 2){
        conquistas[3].status = "trophy";
      }
    }

    if (saves){
      for (let i = 0; i<saves.length; i++){
        if (saves[i].idUsuario == usuarioLogado){
          conquistas[5].status = "trophy";
        }
      }
    }
    localStorage.setItem('tbConquistas', JSON.stringify(conquistas));
    return conquistas;
  }

  async alerta(){
    const toast = await this.toastController.create({
      message: "Nova conquista alcançada! Cheque a página de achievements!",
      duration: 1500
    });
    toast.present();
  }

  /* Funcoes n usada no momento, deixa ai pq slah */
  buscarPorId (id: number){
    let conquistas= JSON.parse(localStorage.getItem('tbConquistas'));
    let conquista= conquistas.find(u => u.id === id);
    return conquista;
  }

  criarConquista( conquista: any) {
    let conquistas = JSON.parse(localStorage.getItem('tbConquistas'));
    conquistas.push(conquista);
    localStorage.setItem('tbConquistas', JSON.stringify(conquistas));
  }
}
