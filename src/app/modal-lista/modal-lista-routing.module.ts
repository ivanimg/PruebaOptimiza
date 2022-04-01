import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalListaPage } from './modal-lista.page';

const routes: Routes = [
  {
    path: '',
    component: ModalListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalListaPageRoutingModule {}
