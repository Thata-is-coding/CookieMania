import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUserPage } from './sign-user.page';

const routes: Routes = [
  {
    path: '',
    component: SignUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUserPageRoutingModule {}
