import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ArtikelPage } from '../artikel/artikel';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: AuthProvider) {
  }
  halamanprofile(){
    this.navCtrl.push(ArtikelPage);
  }
  
}
