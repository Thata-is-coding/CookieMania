import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievments',
  templateUrl: './achievments.page.html',
  styleUrls: ['./achievments.page.scss'],
})
export class AchievmentsPage implements OnInit {
  public conquistas = [
    { id: 0, title: 'O começo de tudo', desc: 'Clicou pela primeira vez', status: "lock-closed" },
    { id: 1,title: 'No caminho certo', desc: 'Conseguiu 100 pontos', status: "lock-closed" },
    { id: 2,title: 'Chamanando os amigos', desc: 'Conseguiu seu segundo cookie', status: "lock-closed" },
    { id: 3,title: 'Praticamente profissional', desc: 'Conseguiu 1000 pontos', status: "lock-closed" },
    { id: 4,title: 'Para mais tarde', desc: 'Salvou pela primeira vez', status: "lock-closed" }
  ];

  constructor( public navController: NavController) { }

  ngOnInit() {
    let conquistas = JSON.parse(localStorage.getItem('conquista'));
    if (conquistas){
      this.conquistas = conquistas;
    }

    this.verificarConquistas();
    
  }

  verificarConquistas(){
    let pontos = JSON.parse(localStorage.getItem('pontos'));
    let save = JSON.parse(localStorage.getItem('save'));
    let cookies = JSON.parse(localStorage.getItem('cookies'));
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (pontos){
      if (pontos >= 1){
        this.conquistas[0].status = "trophy";
      }
      if (pontos >= 100){
        this.conquistas[1].status = "trophy";
      }
      if (pontos >= 1000){
        this.conquistas[3].status = "trophy";
      }
    }
    
    if (cookies){
      if (cookies.length >= 2){
        this.conquistas[2].status = "trophy";
      }
    }

    if (!usuarioLogado){
      this.navController.navigateBack('/login-user');
    }

    if (save){
      for (let i = 0; i<save.length; i++){
        if (save[i].perfil == usuarioLogado){
          this.conquistas[4].status = "trophy";
        }
      }
    }

    localStorage.setItem('conquistas', JSON.stringify(this.conquistas));
  }

}
