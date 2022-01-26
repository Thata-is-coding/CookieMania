import { ConquistaService } from './../../services/conquista.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conquista',
  templateUrl: './conquista.page.html',
  styleUrls: ['./conquista.page.scss'],
})
export class ConquistaPage implements OnInit {
  public conquistas = this.conquistaService.listar();
    

  constructor( public navController: NavController, public conquistaService: ConquistaService) { }

  ngOnInit() {
    localStorage.setItem('tbConquistas', JSON.stringify(this.conquistas));
    this.conquistaService.verificarConquistas(this.conquistas);

    if (this.conquistas[1].status == 'lock-closed'){
      this.conquistaService.atualizar[1];
    }
  }
}