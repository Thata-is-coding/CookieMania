import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievmentsPageRoutingModule } from './achievments-routing.module';

import { AchievmentsPage } from './achievments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievmentsPageRoutingModule
  ],
  declarations: [AchievmentsPage]
})
export class AchievmentsPageModule {}
