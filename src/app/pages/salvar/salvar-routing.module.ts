import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalvarPage } from './salvar.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalvarPageRoutingModule {}
