import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUserPageRoutingModule } from './sign-user-routing.module';

import { SignUserPage } from './sign-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignUserPageRoutingModule
  ],
  declarations: [SignUserPage]
})
export class SignUserPageModule {}
