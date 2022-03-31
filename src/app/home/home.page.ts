import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Hacerlos privados para aumentar seguridad
  usuario: string;
  password: string;
  datosLogin: string;

  constructor(public http: HttpClient,
              private router: Router,
              private alertController: AlertController) {}

  login(){
    console.log('user',this.usuario,'pass',this.password);
    this.datosLogin = JSON.stringify({user:this.usuario,pass:this.password});
    this.http.post('https://optimizaprocess.net/test/',this.datosLogin).subscribe(data=>{
        console.log('data',data);
        // if(data.error === 0){
        if(data){
          this.router.navigate(['lista']);
        } else {
          this.alertController.create({
            header: 'Error',
            subHeader: 'Login incorrecto',
            message: 'Usuario o contraseña incorrecto.',
            buttons: ['OK']
          }).then(res => {
            res.present();
          });
        }
    },error=>{
      console.log('Error',error);
    });
  }

}
