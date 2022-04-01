import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalListaPageRoutingModule } from './modal-lista-routing.module';

import { ModalListaPage } from './modal-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalListaPageRoutingModule
  ],
  declarations: [ModalListaPage]
})
export class ModalListaPageModule {}
