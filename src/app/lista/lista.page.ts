import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ModalController } from '@ionic/angular';
import { ModalListaPage } from '../modal-lista/modal-lista.page';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  lista: any;
  modelData: any;

  constructor(private http: HttpClient,
              public modalController: ModalController) {
    this.lista = [];
    this.getData();
  }

  ngOnInit() {
  }

  getData(){
    this.http.get('https://optimizaprocess.net/test/').subscribe(data => {
      this.lista = data;
      console.log('lista',this.lista);
    },error=>{
    console.log(error);
    });
  }

  async openModal(objetoD){
    const modal = await this.modalController.create({
      component: ModalListaPage,
      cssClass: 'backTransparent',
      componentProps: {
        objeto : objetoD
      }
      // backdropDismiss: true
    });

    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null){
        //Al volver se vuelve a cargar los datos
        this.getData();
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });
    return await modal.present();
  }

}
