import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  lista: any;

  constructor(private http: HttpClient) {
    this.lista = [];
    console.log('inicio');
    this.http.get('https://optimizaprocess.net/test/').subscribe(data => {
      this.lista = data;
      console.log('lista',this.lista);
      // resolve(data);
    },error=>{
    console.log(error);
    });
  }

  ngOnInit() {
  }

}
