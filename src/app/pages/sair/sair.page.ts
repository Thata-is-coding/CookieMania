import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.page.html',
  styleUrls: ['./sair.page.scss'],
})
export class SairPage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
    localStorage.setItem('usuarioLogado', null);
    localStorage.setItem('cookieAtivo', null);
    localStorage.setItem('arrayCookies', null);
    localStorage.setItem('pontos', null);
    localStorage.setItem('tbConquistas', null);
    localStorage.setItem('tbSetting', null);

    this.navController.navigateBack('/login-user');
  }

}
