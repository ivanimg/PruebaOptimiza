import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-lista',
  templateUrl: './modal-lista.page.html',
  styleUrls: ['./modal-lista.page.scss'],
})
export class ModalListaPage implements OnInit {
  @Input() objeto: any;
  detalles: any;
  lista: any;

  constructor(private modalController: ModalController,
              private http: HttpClient,) {
    this.lista = [];
    this.http.get('https://optimizaprocess.net/test/').subscribe(data => {
      this.lista = [];
      this.lista = data;
      // this.lista.map(objetos => {
      //     console.log('objetos', objetos);
      //   });
      //   console.log('lista',this.lista);
    },error=>{
    console.log(error);
    });
  }

  ngOnInit() {
    console.log('objeto',this.objeto);
    this.detalles = this.objeto;
  }

  async closeModel() {
    const close = 'Modal Removed';
    await this.modalController.dismiss(close);
  }

}
