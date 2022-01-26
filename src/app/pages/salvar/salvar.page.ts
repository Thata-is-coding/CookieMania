import { SaveService } from './../../services/save.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  constructor(private saveService: SaveService, public navController: NavController) { }

  ngOnInit() {
    this.saveService.salvar();
    this.navController.navigateBack('/main');
  }

}
