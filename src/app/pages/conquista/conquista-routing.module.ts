import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConquistaPage } from './conquista.page';

const routes: Routes = [
  {
    path: '',
    component: ConquistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConquistaPageRoutingModule {}
