import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConquistaPageRoutingModule } from './conquista-routing.module';

import { ConquistaPage } from './conquista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConquistaPageRoutingModule
  ],
  declarations: [ConquistaPage]
})
export class ConquistaPageModule {}
