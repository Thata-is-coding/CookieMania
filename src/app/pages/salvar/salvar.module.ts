import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalvarPageRoutingModule } from './salvar-routing.module';

import { SalvarPage } from './salvar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalvarPageRoutingModule
  ],
  declarations: [SalvarPage]
})
export class SalvarPageModule {}
